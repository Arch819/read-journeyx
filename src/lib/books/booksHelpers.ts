import { PayloadAction } from '@reduxjs/toolkit';
import { IBooksState, IReadBook, initialState } from './initialState';
import {
  IByIdResponse,
  IRecommendResponse,
  IRemoveBookResponse,
} from '../api/bookApi';

export const getRecommendFulfilled = (
  state: IBooksState,
  { payload }: PayloadAction<IRecommendResponse>,
) => {
  state.recommendBooks = payload.results;
  state.page = payload.page;
  state.totalPages = payload.totalPages;
  state.perPage = payload.perPage;
};

export const getByOwnFulfilled = (
  state: IBooksState,
  { payload }: PayloadAction<IReadBook[]>,
) => {
  state.library = payload;
};

export const bookDetailFulfilled = (
  state: IBooksState,
  { payload }: PayloadAction<IByIdResponse>,
) => {
  state.detailBook = payload;
};

export const addBookFulfilled = (
  state: IBooksState,
  { payload }: PayloadAction<IReadBook>,
) => {
  state.library?.push(payload);
};

export const updateBookFulfilled = (
  state: IBooksState,
  { payload }: PayloadAction<IReadBook>,
) => {
  state.library =
    state.library?.map((book) => (book._id === payload._id ? payload : book)) ||
    null;
};

export const removeBookFulfilled = (
  state: IBooksState,
  { payload }: PayloadAction<IRemoveBookResponse>,
) => {
  state.library =
    state.library?.filter((book) => book._id !== payload.id) || null;
};

export const signOut = () => {
  return initialState;
};
