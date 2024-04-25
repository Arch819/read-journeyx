import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFilterRecommend, initialState } from './initialState';
import {
  addBookByIdThunk,
  addBookThunk,
  deleteReadingBookThunk,
  getByIdThunk,
  getByOwnThunk,
  getRecommendThunk,
  readingFinishThunk,
  readingStartThunk,
  removeByIdThunk,
} from './booksThunk';
import {
  addBookFulfilled,
  bookDetailFulfilled,
  getByOwnFulfilled,
  getRecommendFulfilled,
  removeBookFulfilled,
  signOut,
  updateBookFulfilled,
} from './booksHelpers';

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    changePage(state, { payload }) {
      state.page = payload;
    },
    changeFilter(state, { payload }: PayloadAction<IFilterRecommend>) {
      state.filter.author = payload.author;
      state.filter.title = payload.title;
      state.filter.status = payload.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendThunk.fulfilled, getRecommendFulfilled)
      .addCase(getByOwnThunk.fulfilled, getByOwnFulfilled)
      .addCase(getByIdThunk.fulfilled, bookDetailFulfilled)
      .addCase(addBookThunk.fulfilled, addBookFulfilled)
      .addCase(addBookByIdThunk.fulfilled, addBookFulfilled)
      .addCase(readingStartThunk.fulfilled, updateBookFulfilled)
      .addCase(readingFinishThunk.fulfilled, updateBookFulfilled)
      .addCase(removeByIdThunk.fulfilled, removeBookFulfilled)
      .addCase(deleteReadingBookThunk.fulfilled, updateBookFulfilled)
      .addMatcher(
        (action: PayloadAction) => action.type.includes('signOut'),
        signOut,
      );
  },
});

export const { changePage, changeFilter } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
