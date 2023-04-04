import {configureStore} from '@reduxjs/toolkit';
import stuReducer from './stuSlice';

const store = configureStore({
  reducer: {
    student: stuReducer
  }
})

export default store;