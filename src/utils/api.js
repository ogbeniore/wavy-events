import axios from 'axios';
import { API_URL } from './constants';

const API = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

const getEvents = function getEvents(page = 1) {
  const url = `events?page=${page}`;
  return API.get(url);
};

const getSingleEvent = function getSingleEvent(id) {
  const url = `events/${id}`;
  return API.get(url);
};

const getTicketTypes = function getTicketTypes(id) {
  const url = `ticket-types/events/${id}`;
  return API.get(url);
};

const registerForEvent = function registerForEvent({ body, event }) {
  const url = `events/${event}/register`;
  return API.post(url, body);
};

export {
  getEvents,
  getSingleEvent,
  getTicketTypes,
  registerForEvent,
};
