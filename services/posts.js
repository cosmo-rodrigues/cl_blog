import { get, post, patch, remove } from './api';

const getById = async (id) =>
  await get({ type: 'user', service: `careers/${id}/` });

const getAll = async (queryString) =>
  await get({ type: 'user', service: `careers/`, queryString });

const create = async (data) =>
  await post({ type: 'user', service: `careers/`, data });

const update = async (data) =>
  await patch({ type: 'user', service: `careers/${data.id}/`, data });

const deletePost = async (id) =>
  await remove({ type: 'user', service: `careers/${id}/` });

export const postService = {
  getById,
  getAll,
  update,
  deletePost,
  create,
};
