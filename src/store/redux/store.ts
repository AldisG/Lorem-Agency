import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import testSlice from '../slices/testSlice';
import imagesAPI from '../services/storeApiCalls';

const store = configureStore({
  reducer: {
    [imagesAPI.reducerPath]: imagesAPI.reducer,
    testSlice: testSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(imagesAPI.middleware)
});
setupListeners(store.dispatch)

export default store;
export type RootState = ReturnType<typeof store.getState>
export type ApiDispatch = typeof store.dispatch
