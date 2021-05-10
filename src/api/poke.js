import http from './http';

export const getPokeList = async () => http.get('pokemon');
