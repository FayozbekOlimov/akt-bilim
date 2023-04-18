import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import videoReducer from './videosSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    videos: videoReducer
  },
});

export default store;
