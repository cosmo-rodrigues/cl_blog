import axios from 'axios';
import { loginService } from './login';

export const api = (type = 'user') => {
  const paths = {
    user: process.env.REACT_APP_BASE_URL_API,
  };

  const API = axios.create({
    baseURL: paths[type],
    withCredentials: true,
    headers: {
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
  });

  API.interceptors.response.use(undefined, (err) => {
    const {
      config,
      response: { status },
    } = err;
    return Promise.reject({
      status: status,
      config: config,
      response: err.response,
    });
  });

  API.interceptors.request.use(
    (config) => {
      if (config.url.indexOf('users/login') !== -1) return config;

      const token = loginService.getToken();
      if (token) config.headers['Authorization'] = token.replaceAll('"', '');
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return API;
};

export const get = async (config) => {
  const { type, service, queryString } = config;
  if (queryString) {
    return await api(type).get(`${service}/${queryString}`);
  }
  return await api(type).get(`${service}`);
};

export const put = async (config) => {
  const { type, service, data } = config;
  return await api(type).put(service, data);
};

export const post = async (config) => {
  const { type, service, data } = config;
  return await api(type).post(service, data);
};

export const remove = async (config) => {
  const { type, service } = config;
  return await api(type).delete(service);
};
