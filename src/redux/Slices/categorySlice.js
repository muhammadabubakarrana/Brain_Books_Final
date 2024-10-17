import {createSlice} from '@reduxjs/toolkit';

export const CategorySlice = createSlice({
  name: 'category',
  initialState: {
    data: null,
  },
  reducers: {
    saveCategory(state, action) {
      state.data = action.payload;
    },
  },
});

export const {saveCategory} = CategorySlice.actions;
export default CategorySlice.reducer;
