import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItem(state, action) {
      state.items.push(action.payload);
      state.totalPrice = [...state.items, action.payload];
    },
    removeItem(state, action) {
      state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state, action) {
      state.items = [];
    },
  },
});

export const { setItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
