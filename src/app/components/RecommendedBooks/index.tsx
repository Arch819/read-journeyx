import React from 'react';
import Pagination from '../Pagination';
import BookList from '../BookList';
import PageTitle from '../PageTitle';

type RecommendedBooksProps = {};

function RecommendedBooks({}: RecommendedBooksProps) {
  return (
    <div className="content-wrapper">
      <div>
        <PageTitle>Recommended</PageTitle>
        <Pagination />
      </div>
      <BookList />
    </div>
  );
}

export default RecommendedBooks;
