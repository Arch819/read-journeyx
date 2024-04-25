import { IBook } from '@/lib/books/initialState';
import Image from 'next/image';
import React from 'react';
const defaultImg = '/public/defaultBook.png';

type BookItemProps = { book: IBook | null };

function BookItem({ book }: BookItemProps) {
  return (
    <>
      <Image
        src={book?.imageUrl || '/defaultBook.png'}
        alt="book image"
        width={136}
        height={208}
      />
      <h3>{book?.title}</h3>
      <p>{book?.author}</p>
    </>
  );
}

export default BookItem;
