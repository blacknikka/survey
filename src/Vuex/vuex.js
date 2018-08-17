import Vue from 'vue';
import Vuex from 'vuex';
import Submit from '../Util/Submit';
import Dbg from '../Util/Debug';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    ID: 'default ID',
    InputData: {},
  },
  actions: {
    SubmitToServer() {
      Submit.submit();
    },
  },
  mutations: {
    UpdateByName(state, payload) {
      state.InputData[payload.name] = payload.data;
      Dbg.console(state.InputData);
    },
  },
});

export default store;
