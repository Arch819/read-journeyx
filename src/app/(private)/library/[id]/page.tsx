'use client';

import BookItem from '@/app/components/BookItem';
import { useAppSelector } from '@/lib/hooks';
import { selectDetailBook } from '@/lib/books/booksSelectors';

export interface PageProps {}

function Page({}: PageProps) {
  const book = useAppSelector(selectDetailBook);
  return <BookItem book={book} />;
}

export default Page;
