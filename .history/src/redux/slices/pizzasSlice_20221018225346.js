import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchUserById = createAsyncThunk('users/fetchByIdStatus', async (userId, thunkAPI) => {
  const response = await userAPI.fetchById(userId);
  return response.data;
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

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
