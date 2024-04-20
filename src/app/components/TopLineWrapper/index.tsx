'use client';

import React from 'react';
import { TopLineWrapperStyled } from './TopPageWrapper.styled';

type TopLineWrapperProps = {
  children: React.ReactNode;
};

function TopLineWrapper({ children }: TopLineWrapperProps) {
  return <TopLineWrapperStyled>{children}</TopLineWrapperStyled>;
}

export default TopLineWrapper;
