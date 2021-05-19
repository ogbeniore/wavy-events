import Vue from 'vue';
import Vuex from 'vuex';
import { getEvents } from '@/utils/api';

Vue.use(Vuex);

export default {
  state: {
    events: {
      data: null,
      pageInfo: {
        currentPage: 0,
        totalPages: 1,
        total: 0,
      },
    },
  },
  mutations: {
    SET_EVENTS(state, payload) {
      // update events in the store
      state.events.data = [
        ...(state.events.data || []),
        ...payload.events,
      ];
      // update page info
      state.events.pageInfo = payload.pageInfo;
    },
  },
  actions: {
    fetchEvents({ commit, state }) {
      const { events: { pageInfo: { totalPages, currentPage } } } = state;
      if (totalPages > currentPage) {
        getEvents(currentPage + 1)
          .then(({ data: { data } }) => {
            commit('SET_EVENTS', data);
          }).catch(({ response }) => {
            console.log(response.data.message || 'Error fetching events');
          });
      } else {
        console.log('Nothing to fetch');
      }
    },
  },
  getters: {
    allEvents: ({ events }) => events.data,
    onLastPage: ({
      events: { pageInfo: { currentPage, totalPages } },
    }) => totalPages === currentPage,
  },
};
