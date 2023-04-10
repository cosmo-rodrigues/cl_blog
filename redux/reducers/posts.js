import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchPosts } from '../api/posts';

export const fetchPostsAsync = createAsyncThunk(
  'posts/fetchPostsAsync',
  async (options) => {
    const { limit, offset } = options;
    return fetchPosts(limit, offset);
  }
);

export const loadMorePosts = createAsyncThunk(
  'posts/loadMorePosts',
  async (next) => {
    const response = await axios.get(next);
    return response.data;
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    status: 'idle',
    error: null,
    posts: [],
    next: null,
  },
  reducers: {},
  extraReducers: {
      [fetchPostsAsync.pending]: (state) => {
        state.status = 'loading';
      },
      [fetchPostsAsync.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload.results;
        state.next = action.payload.next;
      },
      [fetchPostsAsync.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      },
      [loadMorePosts.pending]: (state) => {
        state.status = 'loading';
      },
      [loadMorePosts.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        state.posts = [...state.posts, ...action.payload.results];
        state.next = action.payload.next;
      },
      [loadMorePosts.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      }
  },
});

export default postsSlice.reducer;
