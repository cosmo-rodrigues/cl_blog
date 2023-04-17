import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts, fetchPostsByUserName } from '../../actions/posts';

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
      state.posts = [...state.posts, ...action.payload.results];
      state.next = action.payload.next;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [fetchPostsByUserName.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchPostsByUserName.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.posts = action.payload.results;
      state.next = action.payload.next;
    },
    [fetchPostsByUserName.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default postsSlice.reducer;
