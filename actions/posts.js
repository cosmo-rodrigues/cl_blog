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
    return postService.getAll(`limit=${limit}&offset=${offset}`);
  }
);

export const fetchPostsByUserName = createAsyncThunk(
  'posts/fetchPostsByUserName',
  async (options) => {
    return postService.getAll(`username=${options.username}`);
  }
);