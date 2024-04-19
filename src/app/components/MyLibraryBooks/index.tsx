import React from 'react';
import PageTitle from '../PageTitle';
import FilterStatusBook from '../FilterStatusBook';

type MyLibraryBooksProps = {};

function MyLibraryBooks({}: MyLibraryBooksProps) {
  return (
    <div className="content-wrapper">
      <div>
        <PageTitle>My library</PageTitle>
        <FilterStatusBook />
      </div>
    </div>
  );
}

export default MyLibraryBooks;
