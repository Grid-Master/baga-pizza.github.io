import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params, thunkAPI) => {
  const { order, sortBy, category, search, currentPage } = params;
  const { data } = await axios.get(
    `https://6343125dba4478d47847e536.mockapi.io/Items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );

  if (data.length === 0) {
    return thunkAPI.rejectWithValue('Пиццы пустые');
  }

  return thunkAPI.fulfillWithValue(data);
});

const initialState = {
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
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      console.log(action);
      state.status = 'error';
      state.items = [];
    });
    builder.addCase(fetchPizzas.pending, (state, action) => {
      console.log(action);
      state.status = 'loading';
      state.items = [];
    });
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
