import http from './http';

export const getPokeList = async () => http.get('pokemon');

export const getPokeDetails = async (payload) => http.get(`pokemon/${payload}`);
