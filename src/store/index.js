import Vue from 'vue';
import Vuex from 'vuex';
import events from './modules/events';
import singleEvent from './modules/single-event';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    events,
    singleEvent,
  },
});
