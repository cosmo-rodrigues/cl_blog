import axios from 'axios';

export const api = (type = 'user') => {
  const paths = {
    user: import.meta.env.VITE_APP_BASE_URL_API,
  };

  const API = axios.create({
    baseURL: paths[type],
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

  return API;
};

export const get = async (config) => {
  const { type, service, queryString } = config;
  if (queryString) {
    return api(type)
      .get(`${service}?${queryString}`)
      .then((response) => response.data);
  }

  return api(type)
    .get(`${service}`)
    .then((response) => response.data);
};

export const put = async (config) => {
  const { type, service, data } = config;
  return api(type)
    .put(service, data)
    .then((response) => response.data);
};

export const post = async (config) => {
  const { type, service, data } = config;
  return api(type)
    .post(service, data)
    .then((response) => response.data);
};

export const remove = async (config) => {
  const { type, service } = config;
  return api(type).delete(service);
};
