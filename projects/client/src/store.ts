import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import dogSlice from './features/dogs/dogSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    dogs: dogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
