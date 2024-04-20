'use client';

import React from 'react';
import PageTitle from '../PageTitle';
import FilterStatusBook from '../FilterStatusBook';
import { LibraryWrapperStyled } from './MyLibraryBooks.styled';
import TopLineWrapper from '../TopLineWrapper';

type MyLibraryBooksProps = {};

function MyLibraryBooks({}: MyLibraryBooksProps) {
  return (
    <LibraryWrapperStyled className="content-wrapper">
      <TopLineWrapper>
        <PageTitle>My library</PageTitle>
        <FilterStatusBook />
      </TopLineWrapper>
    </LibraryWrapperStyled>
  );
}

export default MyLibraryBooks;
