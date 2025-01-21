import axios from 'axios';

const { EXPO_PUBLIC_MOVIE_DB_URL, EXPO_PUBLIC_MOVIE_DB_KEY } = process.env;

export const movieApi = axios.create({
  baseURL: EXPO_PUBLIC_MOVIE_DB_URL,
  params:{
    language: 'es-MX',
    api_key: EXPO_PUBLIC_MOVIE_DB_KEY,
  }
});