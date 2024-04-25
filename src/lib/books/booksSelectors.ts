import { RootState } from '../store';

export const selectRecommendBooks = (state: RootState) =>
  state.books.recommendBooks;
export const selectLibrary = (state: RootState) => state.books.library;
export const selectPage = (state: RootState) => state.books.page;
export const selectTotalPage = (state: RootState) => state.books.totalPages;
export const selectFilter = (state: RootState) => state.books.filter;
export const selectDetailBook = (state: RootState) => state.books.detailBook;
