import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cart/slice';
import items from './slices/pizzasSlice';
import { useDispatch } from 'react-redux';

export const store: any = configureStore({
  reducer: {
    filter,
    cart,
    items,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
