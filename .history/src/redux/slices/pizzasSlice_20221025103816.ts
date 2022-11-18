import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>('pizza/fetchPizzasStatus', async (params) => {
  const { order, sortBy, category, search, currentPage } = params;
  const { data } = await axios.get<Pizza[]>(
    `https://6343125dba4478d47847e536.mockapi.io/Items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );

  return data;
});

type Pizza = {
  id: string,
  title: string,
  price: number,
  imageUrl: string, 
  sizes: number[], 
  types: number[]
}

export enum Status {
  LOADING='loading',
  SUCCESS='success',
  ERROR='error',
}

interface IPizzasSlice {
  items: Pizza[];
  status: Status
}

const initialState: IPizzasSlice = {
  items: [],
  status: Status.LOADING, //loading | success | error
};

const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
  },
});

export const selectPizzaData = (state: RootState) => state.items;

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
