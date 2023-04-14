import { get, post, put, remove } from './api';

const getById = async (id) => get({ type: 'user', service: `careers/${id}` });

const getAll = async (queryString) => get({ type: 'user', service: `careers/`, queryString });

const create = async (data) => post({ type: 'user', service: `careers/`, data });

const update = async (id, data) =>
  put({ type: 'user', service: `careers/${id}`, data });

const deletePost = async (id) =>
  remove({ type: 'user', service: `careers/${id}` });

export const postService = {
  getById,
  getAll,
  update,
  deletePost,
  create,
};
