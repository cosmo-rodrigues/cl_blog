import { createAsyncThunk } from '@reduxjs/toolkit';
import { postService } from '../services/posts';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (options) => {
    if (options.next) {
      const NEXT_QUERY = options.next.split('?')[1];
      return postService.getAll(NEXT_QUERY);
    }
    const { limit, offset } = options;
    const payload = await postService.getAll(`limit=${limit}&offset=${offset}`);
    return { ...payload, reset: options?.reset || false };
  }
);

export const fetchPostsByUserName = createAsyncThunk(
  'posts/fetchPostsByUserName',
  async (options) => {
    return postService.getAll(`username=${options.username}`);
  }
);

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
  return postService.deletePost(id);
});

export const createPost = createAsyncThunk('posts/createPost', async (post) => {
  return postService.create(post);
});

export const updatePost = createAsyncThunk('posts/updatePost', async (post) => {
  return postService.update(post);
});
