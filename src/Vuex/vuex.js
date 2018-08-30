import Vue from 'vue';
import Vuex from 'vuex';
import Submit from '../Util/Submit';
import Dbg from '../Util/Debug';
import Validate from '../Util/Validate';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    survey: {
      InputData: {},
      token: '',
      mail: '',
    },
    ErrorMessage: {},

    // is logged in.
    LoggedIn: false,

    // Question data.
    Questions: [],
  },
  actions: {
    SubmitToServer() {
      let ret = false;

      // validate the data.
      const result = Validate.validate(
        this.state.survey.InputData,
        this.state.Questions,
      );
      if (result.result === true) {
        Dbg.console(this.state.survey);
        ret = Submit.submit(this.state.survey).result;
      } else {
        // Error is detected.
        Dbg.console(result);
        this.state.ErrorMessage = result.data;
      }

      return ret;
    },
  },
  mutations: {
    UpdateByName(state, payload) {
      state.survey.InputData[payload.name] = payload.data;
    },
    UpdateLoggedInStatus(state, payload) {
      state.LoggedIn = true;
      state.survey.token = payload.token;
      state.survey.mail = payload.mail;

      const obj = Object.values(payload.questions);
      const q = [];
      obj.forEach(d => {
        q.push({
          No: d.question,
          Question: `Question${d.question}`,
          Type: d.type,
          Subject: 'subject',
          Answer: Object.keys(d.answer),
        });
      });
      state.Questions = q;
    },
  },
});

export default store;
