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

export {
  getEvents,
};
