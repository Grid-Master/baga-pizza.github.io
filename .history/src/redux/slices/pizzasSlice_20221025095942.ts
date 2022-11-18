import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { CartItem } from './cartSlice';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params: Record<string, string>) => {
  const { order, sortBy, category, search, currentPage } = params;
  const { data } = await axios.get(
    `https://6343125dba4478d47847e536.mockapi.io/Items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );

  return data as CartItem[];
});

type Pizza = {
  id: string,
  title: string,
  price: number,
  imageUrl: string, 
  sizes: number[], 
  types: number[]
}

interface IPizzasSlice {
  items: Pizza[];
  status: 'loading' | 'success' | 'error'
}

const initialState: IPizzasSlice = {
  items: [],
  status: 'loading', //loading | success | error
};

const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    });
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
  },
});

export const selectPizzaData = (state: RootState) => state.items;

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
