import axios, { AxiosResponse } from "axios";

const baseURL = 'https://www.kamranbet.com/';

export const instance = axios.create({
  baseURL,
});

instance.interceptors.response.use(
  (response): AxiosResponse => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // send logout request here
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default instance;
