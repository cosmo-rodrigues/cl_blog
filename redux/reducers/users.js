import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../../actions/users';

const initialState = {
  loading: false,
  users: [],
  error: '',
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = '';
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    },
  },
});

export default usersSlice.reducer;
