import {createSlice} from '@reduxjs/toolkit';

export const ChapterSlice = createSlice({
  name: 'chapter',
  initialState: {
    data: null,
  },
  reducers: {
    saveChapter(state, action) {
      state.data = action.payload;
    },
  },
});

export const {saveChapter} = ChapterSlice.actions;
export default ChapterSlice.reducer;
