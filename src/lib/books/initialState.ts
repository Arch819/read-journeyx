import { IByIdResponse } from '../api/bookApi';

export type StatusBookProps = {
  status?: 'unread' | 'in-progress' | 'done' | 'all';
};

export interface IProgress {
  _id: string;
  startPage: number;
  startReading: string;
  finishPage: number;
  finishReading: string;
  speed: number;
  status: string;
}

export interface IBook {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  recommend?: boolean;
}
export interface IReadBook extends Omit<IBook, 'recommend'> {
  status: StatusBookProps;
  owner: string;
  progress: IProgress[] | [];
  timeLeftToRead?: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export interface IFilterRecommend extends StatusBookProps {
  author?: string;
  title?: string;
}
export interface IBooksState {
  recommendBooks: IBook[] | null;
  library: IReadBook[] | null;
  detailBook: IByIdResponse | null;
  totalPages: number;
  page: number;
  perPage: number;
  filter: IFilterRecommend;
}

export const initialState: IBooksState = {
  recommendBooks: null,
  library: null,
  detailBook: null,
  totalPages: 0,
  page: 1,
  perPage: 0,
  filter: { author: '', title: '', status: 'all' },
};
