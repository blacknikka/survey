import Vue from 'vue';
import Vuex from 'vuex';
import Submit from '../Util/Submit';
import Dbg from '../Util/Debug';
import Validate from '../Util/Validate';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    ID: 1,
    InputData: {},
    IsError: false,
    ErrorMessage: {},
  },
  actions: {
    SubmitToServer() {
      this.state.IsError = true;

      // validate the data.
      const result = Validate.validate(this.state.InputData);
      if (result.result === true) {
        Submit.submit(this.state);
      } else {
        // Error is detected.
        Dbg.console(result);
        this.state.IsError = true;
        this.state.ErrorMessage = result.data;
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
