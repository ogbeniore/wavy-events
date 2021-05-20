/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import { getSingleEvent, getTicketTypes } from '@/utils/api';

Vue.use(Vuex);

export default {
  state: {
    singleEvent: null,
    ticketTypes: null,
    cart: {
      tickets: [],
      userDetails: {},
    },
  },
  mutations: {
    SET_SINGLE_EVENT(state, singleEvent) {
      state.singleEvent = singleEvent;
    },
    SET_TICKET_TYPES(state, ticketTypes) {
      state.ticketTypes = ticketTypes;
      state.cart.tickets = ticketTypes.map((type) => ({
        ...type,
        numberOfTicketsBought: 0,
      }));
    },
    SET_INITIAL_ORDER(state, ticketTypes) {
      const order = {};
      ticketTypes.forEach((element) => {
        order[element] = 0;
      });
      state.order = order;
    },
    UPDATE_CART(state, { id, updateQuantity }) {
      state.cart.tickets.forEach((ticket) => {
        if (ticket.id === id) {
          (ticket.numberOfTicketsBought = updateQuantity(ticket.numberOfTicketsBought));
        }
      });
    },
  },
  actions: {
    fetchSingleEvent({ commit }, id) {
      getSingleEvent(id)
        .then(({ data: { data } }) => {
          commit('SET_SINGLE_EVENT', data);
        })
        .catch(({ response }) => {
          console.log(response.data.message || 'Error fetching single event');
        });

      getTicketTypes(id)
        .then(({ data: { data } }) => commit('SET_TICKET_TYPES', data))
        .catch(({ response }) => {
          console.log(response.data.message || 'Error fetching event ticket types');
        });
    },
    updateCartQuantity({ commit }, payload) {
      commit('UPDATE_CART', payload);
    },
  },
  getters: {
    singleEvent: ({ singleEvent }) => singleEvent,
    // Sort ticket Types by price, so it goes from cheapest to most expensive
    ticketTypes: ({ ticketTypes }) => (
      ticketTypes ? ticketTypes.sort((a, b) => ((a.price > b.price) ? 1 : -1)) : null
    ),
    cartItems: ({ cart: { tickets } }) => tickets,
    selectedCartItems({ cart: { tickets } }) {
      return tickets.filter((items) => items.numberOfTicketsBought !== 0);
    },
  },
};
