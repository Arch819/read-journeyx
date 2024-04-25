import React from 'react';
import SecondaryBtn from '../SecondaryBtn';
import BookItem from '../BookItem';
import { useAppSelector } from '@/lib/hooks';
import { selectDetailBook } from '@/lib/books/booksSelectors';

type DetailBookProps = {
  causedBy: 'library' | 'recommended' | 'reading';
};

function DetailBook({}: DetailBookProps) {
  const detailBook = useAppSelector(selectDetailBook);
  return (
    <div>
      <div>
        <BookItem book={detailBook} />
      </div>
      <SecondaryBtn text="Add to library"></SecondaryBtn>
    </div>
  );
}

export default DetailBook;
