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
    },
    ErrorMessage: {},

    // is logged in.
    LoggedIn: false,
    LoginToken: '',

    // Question data.
    Questions: [],
  },
  actions: {
    SubmitToServer() {
      // validate the data.
      const result = Validate.validate(
        this.state.survey.InputData,
        this.state.Questions,
      );
      if (result.result === true) {
        Submit.submit(this.state.survey);
      } else {
        // Error is detected.
        Dbg.console(result);
        this.state.ErrorMessage = result.data;
      }
    },
  },
  mutations: {
    UpdateByName(state, payload) {
      state.survey.InputData[payload.name] = payload.data;
    },
    UpdateLoggedInStatus(state, payload) {
      state.LoggedIn = true;
      state.LoginToken = payload.token;

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
