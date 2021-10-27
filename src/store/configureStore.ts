import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { rootReducer } from "./reducers/rootReducer";

const store = configureStore({
  reducer: {
    rootReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
