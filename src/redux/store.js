import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./loginSlice";
import videosReducer from "./videosSlice";
import singleVideoReducer from "./singleVideoSlice";
import subjectsReducer from "./subjectsSlice";
import slidesReducer from "./slidesSlice";
import singleSlideReducer from "./singleSlideSlice";
import resourceReducer from "./resourceSlice";
import userReducer from "./userSlice";
import testsReducer from "./testsSlice";
import testDataReducer from "./testDataSlice";
import testDetailReducer from "./testDetailSlice";
import startedTestDataReducer from "./startedTestDataSlice";
import optionReducer from "./optionSlice";
import submitTestReducer from "./submitTestSlice";

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
    user: userReducer,
    tests: testsReducer,
    testData: testDataReducer,
    startedTestData: startedTestDataReducer,
    testDetail: testDetailReducer,
    option: optionReducer,
    submitTest: submitTestReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
