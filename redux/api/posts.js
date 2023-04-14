import axios from 'axios';

export const fetchPosts = async (limit, offset) => {
  return axios.get(`https://dev.codeleap.co.uk/careers/?limit=${limit}&offset=${offset}`).then(response => response.data)
};

export const fetchMorePosts = async (next) => {
  return axios.get(next).then(response => response.data)
};
