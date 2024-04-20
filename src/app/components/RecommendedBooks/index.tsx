'use client';

import React from 'react';
import Pagination from '../Pagination';
import BookList from '../BookList';
import PageTitle from '../PageTitle';
import TopPageWrapper from '../TopLineWrapper';
import { RecommendedBooksWrapperStyled } from './RecommendedBooks.styled';

type RecommendedBooksProps = {};

function RecommendedBooks({}: RecommendedBooksProps) {
  return (
    <RecommendedBooksWrapperStyled className="content-wrapper">
      <TopPageWrapper>
        <PageTitle>Recommended</PageTitle>
        <Pagination />
      </TopPageWrapper>
      <BookList />
    </RecommendedBooksWrapperStyled>
  );
}

export default RecommendedBooks;
