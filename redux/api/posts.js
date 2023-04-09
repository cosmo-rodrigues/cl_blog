import axios from 'axios';

export const fetchPosts = async (limit, offset) => {
  return axios.get(`https://dev.codeleap.co.uk/careers/?limit=${limit}&offset=${offset}`).then(response => response.data)
};
