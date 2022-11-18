import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async () => {
  const { data } = await axios.get(
    `https://6343125dba4478d47847e536.mockapi.io/Items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );
  return data;
});

const initialState = {
  items: [],
};

const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { fetchPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
