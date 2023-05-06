import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import videosReducer from "./videosSlice";
import singleVideoReducer from "./singleVideoSlice";
import subjectsReducer from "./subjectsSlice";
import slidesReducer from "./slidesSlice";
import singleSlideReducer from "./singleSlideSlice";
import resourceReducer from "./resourceSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, loginReducer);

const store = configureStore({
  reducer: {
    login: persistedReducer,
    videos: videosReducer,
    video: singleVideoReducer,
    subjects: subjectsReducer,
    slides: slidesReducer,
    slide: singleSlideReducer,
    resource: resourceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
