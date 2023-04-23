import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import videosReducer from "./videosSlice";
import subjectsReducer from "./subjectsSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    videos: videosReducer,
    subjects: subjectsReducer,
  },
});

export default store;
