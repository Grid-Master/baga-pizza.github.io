import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setProduct(state, action) {
      state.items.push(action.payload);
    },
  
  setProduct(state, action) {
    state.items.push(action.payload);
  },
});

export const { setCategoryId } = cartSlice.actions;

export default cartSlice.reducer;
