import Vue from 'vue';
import Vuex from 'vuex';
import Submit from '../Util/Submit';
import Dbg from '../Util/Debug';
import Validate from '../Util/Validate';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    ID: 'default ID',
    InputData: {},
  },
  actions: {
    SubmitToServer() {
      Dbg.console(this.state.InputData);

      // validate the data.
      if (Validate.validate(this.state.InputData) === true) {
        Submit.submit(this.state);
      }
    },
  },
  mutations: {
    UpdateByName(state, payload) {
      state.InputData[payload.name] = payload.data;
    },
  },
});

export default store;
