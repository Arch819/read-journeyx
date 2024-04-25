import { createAsyncThunk } from '@reduxjs/toolkit';
import client from '../api';
import {
  BookDataProps,
  IByIdResponse,
  // IByOwnResponse,
  IId,
  IReadingBookData,
  IRecommendResponse,
  IRemoveBookResponse,
  QueryParamsProps,
} from '../api/bookApi';
import { IReadBook } from './initialState';

const {
  getRecommend,
  getById,
  getByOwn,
  add,
  addById,
  readingStart,
  readingFinish,
  removeById,
  deleteReadingBook,
} = client.bookApi;

const errorServer = 'Oops, something broke, try again later';

//get
export const getRecommendThunk = createAsyncThunk<
  IRecommendResponse,
  QueryParamsProps,
  {
    rejectValue: string;
  }
>('books/getRecommend', async (params, { rejectWithValue }) => {
  try {
    const data = await getRecommend(params);
    return data;
  } catch (error: any) {
    return rejectWithValue(errorServer);
  }
});

export const getByOwnThunk = createAsyncThunk<
  IReadBook[],
  QueryParamsProps,
  {
    rejectValue: string;
  }
>('books/getByOwn', async (params, { rejectWithValue }) => {
  try {
    if (params.status === 'all') {
      params.status = undefined;
    }
    const data = await getByOwn(params);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const getByIdThunk = createAsyncThunk<
  IByIdResponse,
  string,
  {
    rejectValue: string;
  }
>('books/getById', async (id, { rejectWithValue }) => {
  try {
    const data = await getById(id);
    return data;
  } catch (error: any) {
    return rejectWithValue(errorServer);
  }
});

//post
export const addBookThunk = createAsyncThunk<
  IReadBook,
  BookDataProps,
  {
    rejectValue: string;
  }
>('books/addBook', async (bookData, { rejectWithValue }) => {
  try {
    const data = await add(bookData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const addBookByIdThunk = createAsyncThunk<
  IReadBook,
  string,
  {
    rejectValue: string;
  }
>('books/addBookById', async (id, { rejectWithValue }) => {
  try {
    const data = await addById(id);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const readingStartThunk = createAsyncThunk<
  IReadBook,
  IReadingBookData,
  {
    rejectValue: string;
  }
>('books/startReading', async (bookData, { rejectWithValue }) => {
  try {
    const data = await readingStart(bookData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const readingFinishThunk = createAsyncThunk<
  IByIdResponse,
  IReadingBookData,
  {
    rejectValue: string;
  }
>('books/finishReading', async (bookData, { rejectWithValue }) => {
  try {
    const data = await readingFinish(bookData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

//delete
export const removeByIdThunk = createAsyncThunk<
  IRemoveBookResponse,
  string,
  {
    rejectValue: string;
  }
>('books/removeById', async (id, { rejectWithValue }) => {
  try {
    const data = await removeById(id);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const deleteReadingBookThunk = createAsyncThunk<
  IByIdResponse,
  QueryParamsProps,
  {
    rejectValue: string;
  }
>('books/deleteReadingBook', async (bookParams, { rejectWithValue }) => {
  try {
    const data = await deleteReadingBook(bookParams);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});
