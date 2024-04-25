'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';
import Pagination from '../Pagination';
import PageTitle from '../PageTitle';
import TopPageWrapper from '../TopLineWrapper';
import { getRecommendThunk } from '@/lib/books/booksThunk';
import { QueryParamsProps } from '@/lib/api/bookApi';
import {
  selectFilter,
  selectPage,
  selectRecommendBooks,
  selectTotalPage,
} from '@/lib/books/booksSelectors';
import BooksList from '../BooksList';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RecommendedBooksWrapperStyled } from './RecommendedBooks.styled';
import { selectDevice } from '@/lib/appState/appStateSelectors';

type RecommendedBooksProps = {};

function RecommendedBooks({}: RecommendedBooksProps) {
  const dispatch = useAppDispatch();
  const [limit, setLimit] = useState(2);

  const books = useAppSelector(selectRecommendBooks);
  const page = useAppSelector(selectPage);
  const totalPages = useAppSelector(selectTotalPage);
  const filter = useAppSelector(selectFilter);
  const device = useAppSelector(selectDevice);
  useEffect(() => {
    if (device === 'mobile') {
      setLimit(2);
    }
    if (device === 'tablet') {
      setLimit(8);
    }
    if (device === 'desktop') {
      setLimit(10);
    }
  }, [device]);

  useEffect(() => {
    const params: QueryParamsProps = {
      page,
      limit,
      author: filter.author,
      title: filter.title,
    };
    dispatch(getRecommendThunk(params));
  }, [dispatch, filter.author, filter.title, limit, page]);

  return (
    <RecommendedBooksWrapperStyled className="content-wrapper">
      <TopPageWrapper>
        <PageTitle>Recommended</PageTitle>
        <Pagination totalPages={totalPages} currentPage={page} />
      </TopPageWrapper>
      <BooksList books={books} />
    </RecommendedBooksWrapperStyled>
  );
}

export default RecommendedBooks;
