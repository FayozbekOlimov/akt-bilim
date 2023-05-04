import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import videosReducer from "./videosSlice";
import singleVideoReducer from "./singleVideoSlice";
import subjectsReducer from "./subjectsSlice";
import slidesReducer from "./slidesSlice";
import singleSlideReducer from "./singleSlideSlice";
import resourceReducer from "./resourceSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    videos: videosReducer,
    video: singleVideoReducer,
    subjects: subjectsReducer,
    slides: slidesReducer,
    slide: singleSlideReducer,
    resource: resourceReducer,
  },
});

export default store;
