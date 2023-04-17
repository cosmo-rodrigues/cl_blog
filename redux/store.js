import { configureStore } from "@reduxjs/toolkit";
import posts from "./reducers/posts";
import users from "./reducers/users";

export const store = configureStore({
  reducer: {
    posts,
    users,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
});
