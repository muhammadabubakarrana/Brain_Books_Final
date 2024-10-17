import {createSlice} from '@reduxjs/toolkit';

export const BooksSlice = createSlice({
  name: 'books',
  initialState: {
    data: null,
  },
  reducers: {
    saveBooks(state, action) {
      state.data = action.payload;
    },
  },
});

export const {saveBooks} = BooksSlice.actions;
export default BooksSlice.reducer;
