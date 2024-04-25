'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { changePage } from '@/lib/books/booksSlice';
import {
  PaginationBtnStyled,
  PaginationWrapperStyled,
} from './Pagination.styled';

type PaginationProps = { totalPages: number; currentPage: number };

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const dispatch = useDispatch();

  const handleChangePage = (event: 'prev' | 'next') => {
    if (event === 'next' && currentPage < totalPages) {
      dispatch(changePage(currentPage + 1));
    }
    if (event === 'prev' && currentPage > 1) {
      dispatch(changePage(currentPage - 1));
    }
  };

  return (
    <PaginationWrapperStyled>
      <PaginationBtnStyled
        className="btn"
        onClick={() => handleChangePage('prev')}
        aria-label="prev pages"
        disabled={!totalPages || currentPage === 1}
      >
        <svg className="icon left" width={16} height={16}>
          <use href="/sprite.svg#icon-chevron-down"></use>
        </svg>
      </PaginationBtnStyled>
      <PaginationBtnStyled
        className="btn"
        aria-label="next pages"
        disabled={!totalPages || currentPage === totalPages}
        onClick={() => handleChangePage('next')}
      >
        <svg className="icon right" width={16} height={16}>
          <use href="/sprite.svg#icon-chevron-down"></use>
        </svg>
      </PaginationBtnStyled>
    </PaginationWrapperStyled>
  );
}

export default Pagination;
