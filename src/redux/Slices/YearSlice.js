import {createSlice} from '@reduxjs/toolkit';

export const YearSlice = createSlice({
  name: 'year',
  initialState: {
    data: null,
  },
  reducers: {
    saveYear(state, action) {
      state.data = action.payload;
    },
  },
});

export const {saveYear} = YearSlice.actions;
export default YearSlice.reducer;
