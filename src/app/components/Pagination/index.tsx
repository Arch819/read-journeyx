'use client';

import React from 'react';
import {
  PaginationBtnStyled,
  PaginationWrapperStyled,
} from './Pagination.styled';
import Image from 'next/image';

type PaginationProps = {};

function Pagination({}: PaginationProps) {
  // add disabled pagination
  return (
    <PaginationWrapperStyled>
      <PaginationBtnStyled className="btn" aria-label="prev pages">
        <svg className="icon left" width={16} height={16}>
          <use href="/sprite.svg#icon-chevron-down"></use>
        </svg>
      </PaginationBtnStyled>
      <PaginationBtnStyled className="btn" aria-label="next pages">
        <svg className="icon right" width={16} height={16}>
          <use href="/sprite.svg#icon-chevron-down"></use>
        </svg>
      </PaginationBtnStyled>
    </PaginationWrapperStyled>
  );
}

export default Pagination;
