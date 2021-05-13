import http from './http';

export const getCharactersList = async (page) => http.get(`character?page=${page}`);

export const getFilteredList = async (page) => http.get(`character?status=${page}`);
