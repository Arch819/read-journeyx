import axios from 'axios';
import { IBook, IReadBook } from '../books/initialState';

export interface IId {
  id: string;
}

export type QueryParamsProps = {
  title?: string;
  author?: string;
  page?: number;
  limit?: number;
  bookId?: string;
  readingId?: string;
  status?: string;
};

export type BookDataProps = {
  title: string;
  author: string;
  totalPages: number;
};

export interface IReadingBookData extends IId {
  page: number;
}

export interface IRecommendResponse {
  results: IBook[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface IByIdResponse extends IReadBook {
  timeLeftToRead: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export interface IRemoveBookResponse extends IId {
  message: string;
}

async function get<TBody>(
  relativeUrl: string,
  params?: QueryParamsProps,
): Promise<TBody> {
  const { data } = await axios(`books/${relativeUrl}`, { params });
  return data as TBody;
}

async function post<TBody, KBody>(
  relativeUrl: string,
  body?: KBody,
): Promise<TBody> {
  const { data } = await axios.post(`books/${relativeUrl}`, body);
  return data as TBody;
}

async function remove<TBody>(
  relativeUrl: string,
  params?: QueryParamsProps,
): Promise<TBody> {
  const { data } = await axios.delete(`books/${relativeUrl}`, { params });
  return data as TBody;
}

interface IBookApi {
  //GET
  getRecommend: (params: QueryParamsProps) => Promise<IRecommendResponse>;
  getByOwn: (params: QueryParamsProps) => Promise<IReadBook[]>;
  getById: (id: string | undefined) => Promise<IByIdResponse>;
  //POST
  add: (bodyData: BookDataProps) => Promise<IReadBook>;
  addById: (id: string | undefined) => Promise<IReadBook>;
  readingStart: (bookData: IReadingBookData) => Promise<IReadBook>;
  readingFinish: (bookData: IReadingBookData) => Promise<IByIdResponse>;
  removeById: (id: string | undefined) => Promise<IRemoveBookResponse>;
  deleteReadingBook: (params: QueryParamsProps) => Promise<IByIdResponse>;
}

export const bookApi: IBookApi = {
  //GET
  getRecommend: async (params) => {
    return await get<IRecommendResponse>('recommend', params);
  },
  getByOwn: async (params) => {
    return await get<IReadBook[]>('own', params);
  },
  getById: async (id) => {
    return await get<IByIdResponse>(`${id}`);
  },

  //POST
  add: async (bookData) => {
    return await post<IByIdResponse, BookDataProps>('add', bookData);
  },
  addById: async (id) => {
    return await post<IReadBook, undefined>(`add/${id}`);
  },
  readingStart: async (bookData) => {
    return await post<IReadBook, IReadingBookData>('reading/finish', bookData);
  },
  readingFinish: async (bookData) => {
    return await post<IByIdResponse, IReadingBookData>(
      'reading/finish',
      bookData,
    );
  },

  //DELETE
  removeById: async (id) => {
    return await remove<IRemoveBookResponse>(`remove/${id}`);
  },
  deleteReadingBook: async (params) => {
    return await remove<IByIdResponse>('reading', params);
  },
};
