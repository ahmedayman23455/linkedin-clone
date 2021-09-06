import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { user: null, isLoggedin: false },
  reducers: {
    signin: (state, action) => {
      state.user = action.payload;
      state.isLoggedin = true;
    },
    signup: (state, action) => {
      state.user = action.payload;
      state.isLoggedin = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedin = false;
    },
  },
});

export const { signin, signup, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectIsLoggedin = (state) => state.user.isLoggedin;

export default userSlice.reducer;
