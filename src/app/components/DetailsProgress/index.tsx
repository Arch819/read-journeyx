'use client';

import React from 'react';
import {
  DetailsProgressTitleStyled,
  DetailsProgressWrapperStyled,
} from './DetailsProgress.styled';
import TopLineWrapper from '../TopLineWrapper';

type DetailsProgressProps = {
  children: React.ReactNode;
  progressVariant?: React.ReactNode;
  textTitle?: string;
};

function DetailsProgress({
  children,
  textTitle,
  progressVariant,
}: DetailsProgressProps) {
  return (
    <DetailsProgressWrapperStyled>
      <TopLineWrapper>
        <DetailsProgressTitleStyled>{textTitle}</DetailsProgressTitleStyled>
        {progressVariant}
      </TopLineWrapper>
      {children}
    </DetailsProgressWrapperStyled>
  );
}

export default DetailsProgress;
