'use client';

import React from 'react';
import PageTitle from '../PageTitle';
import { MyReadingWrapperStyled } from './MyReadingBookWrapper.styled';
import TopPageWrapper from '../TopLineWrapper';

type MyReadingBookWrapperProps = {};

function MyReadingBookWrapper({}: MyReadingBookWrapperProps) {
  return (
    <MyReadingWrapperStyled className="content-wrapper">
      <TopPageWrapper>
        <PageTitle>My Reading</PageTitle>
      </TopPageWrapper>
    </MyReadingWrapperStyled>
  );
}

export default MyReadingBookWrapper;
