import Vue from 'vue';
import Vuex from 'vuex';
import { getSingleEvent, getTicketTypes } from '@/utils/api';

Vue.use(Vuex);

export default {
  state: {
    singleEvent: null,
    ticketTypes: null,
  },
  mutations: {
    SET_SINGLE_EVENT(state, singleEvent) {
      state.singleEvent = singleEvent;
    },
    SET_TICKET_TYPES(state, ticketTypes) {
      state.ticketTypes = ticketTypes;
    },
  },
  actions: {
    fetchSingleEvent({ commit }, id) {
      getSingleEvent(id)
        .then(({ data: { data } }) => {
          commit('SET_SINGLE_EVENT', data);
        })
        .catch(({ response }) => {
          debugger;
          console.log(response.data.message || 'Error fetching single event');
        });

      getTicketTypes(id)
        .then(({ data: { data } }) => commit('SET_TICKET_TYPES', data))
        .catch(({ response }) => {
          debugger;
          console.log(response.data.message || 'Error fetching event ticket types');
        });
    },
  },
  getters: {
    singleEvent: ({ singleEvent }) => singleEvent,
    // Sort ticket Types by price, so it goes from cheapest to most expensive
    ticketTypes: ({ ticketTypes }) => (
      ticketTypes ? ticketTypes.sort((a, b) => ((a.price > b.price) ? 1 : -1)) : null
    ),
  },
};
