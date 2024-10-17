import {createSlice} from '@reduxjs/toolkit';

export const BoardSlice = createSlice({
  name: 'board',
  initialState: {
    data: null,
  },
  reducers: {
    saveBoard(state, action) {
      state.data = action.payload;
    },
  },
});

export const {saveBoard} = BoardSlice.actions;
export default BoardSlice.reducer;
