import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as postsApi from '../api/posts';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPostsAsync',
  async (options) => {
    const { limit, offset } = options;
    return postsApi.fetchPosts(limit, offset);
  }
);

export const fetchMorePosts = createAsyncThunk(
  'posts/loadMorePosts',
  async (next) => {
    return postsApi.fetchMorePosts(next)
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    status: '',
    error: null,
    posts: [],
    next: null,
  },
  reducers: {},
  extraReducers: {
      [fetchPosts.pending]: (state) => {
        state.status = 'loading';
      },
      [fetchPosts.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload.results;
        state.next = action.payload.next;
      },
      [fetchPosts.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      },
      [fetchMorePosts.pending]: (state) => {
        state.status = 'loading';
      },
      [fetchMorePosts.fulfilled]: (state, action) => {
        state.status = 'succeeded';
        state.posts = [...state.posts, ...action.payload.results];
        state.next = action.payload.next;
      },
      [fetchMorePosts.rejected]: (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      }
  },
});

export default postsSlice.reducer;
