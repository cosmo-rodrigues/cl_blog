import { configureStore } from "@reduxjs/toolkit";
import posts from "./reducers/posts";
import users from "./reducers/users";

const store = configureStore({
  reducer: {
    posts,
    users,
  },
});

export default store;