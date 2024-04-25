import { IBook, IReadBook } from '@/lib/books/initialState';
import React from 'react';
import BookItem from '../BookItem';
import { useAppDispatch } from '@/lib/hooks';
import { getByIdThunk } from '@/lib/books/booksThunk';
import { usePathname, useRouter } from 'next/navigation';
import { BookListStyled } from './BookList.styled';

type BooksListProps = {
  books: IBook[] | IReadBook[] | null;
};

function BooksList({ books }: BooksListProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const path = usePathname();

  const openDetailBook = (id: string) => {
    dispatch(getByIdThunk(id)).then((r) => {
      if (r.meta.requestStatus === 'rejected') {
        return;
      }
      router.push(`${path}/${id}`, { scroll: false });
    });
  };
  return (
    <>
      {books ? (
        <BookListStyled>
          {books.map((book) => (
            <li key={book._id} onClick={() => openDetailBook(book._id)}>
              <BookItem book={book} />
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
