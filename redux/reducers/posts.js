import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts } from '../api/posts';

export const fetchPostsAsync = createAsyncThunk(
  'posts/fetchPosts',
  async (params) => {
    return fetchPosts(params.limit, params.offset);
  }
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null,
    offset: 0
  },
  reducers: {
    setOffset: (state, action) => {
      state.offset = action.payload;
    }
  },
  extraReducers: {
    [fetchPostsAsync.pending]: (state) => {
        state.loading = true;
      },
      [fetchPostsAsync.fulfilled]: (state, action) => {
        state.loading = false;
        state.posts = [...state.posts, ...action.payload.results];
        state.offset = state.offset + 10;
      },
      [fetchPostsAsync.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      },
  },
});

export const { setOffset } = postsSlice.actions;

export const selectPosts = (state) => state.posts.posts;
export const selectLoading = (state) => state.posts.loading;
export const selectError = (state) => state.posts.error;
export const selectOffset = (state) => state.posts.offset;

export default postsSlice.reducer;
