'use client';

import React, { useEffect } from 'react';
import PageTitle from '../PageTitle';
import FilterStatusBook from '../FilterStatusBook';
import { LibraryWrapperStyled } from './MyLibraryBooks.styled';
import TopLineWrapper from '../TopLineWrapper';
import { getByOwnThunk } from '@/lib/books/booksThunk';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectFilter, selectLibrary } from '@/lib/books/booksSelectors';
import { QueryParamsProps } from '@/lib/api/bookApi';
import BooksList from '../BooksList';

type MyLibraryBooksProps = {};

function MyLibraryBooks({}: MyLibraryBooksProps) {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);
  const books = useAppSelector(selectLibrary);

  useEffect(() => {
    const params: QueryParamsProps = {
      status: filter.status,
    };
    dispatch(getByOwnThunk(params));
  }, [dispatch, filter.status]);

  return (
    <LibraryWrapperStyled className="content-wrapper">
      <TopLineWrapper>
        <PageTitle>My library</PageTitle>
        <FilterStatusBook />
      </TopLineWrapper>
      <BooksList books={books} />
    </LibraryWrapperStyled>
  );
}

export default MyLibraryBooks;
