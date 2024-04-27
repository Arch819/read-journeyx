import { IBook, IReadBook } from '@/lib/books/initialState';
import React from 'react';
import BookItem from '../BookItem';
import { useAppDispatch } from '@/lib/hooks';
import { getByIdThunk } from '@/lib/books/booksThunk';
import { usePathname, useRouter } from 'next/navigation';
import { BookListStyled } from './BookList.styled';
import { CausedByProps } from '../PopUp/DetailBook';

type BooksListProps = {
  books: IBook[] | IReadBook[] | null;
  causedBy: CausedByProps;
};

function BooksList({ books, causedBy }: BooksListProps) {
  return (
    <>
      {books ? (
        <BookListStyled>
          {books.map((book) => (
            <li key={book._id}>
              <BookItem book={book} causedBy={causedBy} />
            </li>
          ))}
        </BookListStyled>
      ) : (
        <p>Nothing found</p>
      )}
    </>
  );
}

export default BooksList;
