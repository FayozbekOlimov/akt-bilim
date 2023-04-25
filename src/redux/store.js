import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import videosReducer from "./videosSlice";
import singleVideoReducer from "./singleVideoSlice";
import subjectsReducer from "./subjectsSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    videos: videosReducer,
    video: singleVideoReducer,
    subjects: subjectsReducer,
  },
});

export default store;
