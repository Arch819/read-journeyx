import React from 'react';
import { IBook } from '@/lib/books/initialState';
import Image from 'next/image';
import { CausedByProps } from '../PopUp/DetailBook';
import { BookItemWrapperStyled } from './BookItem.styled';
import { notiflixConfirm } from '@/utils/notiflixMessages';
import { useAppDispatch } from '@/lib/hooks';
import { getByIdThunk, removeByIdThunk } from '@/lib/books/booksThunk';
import { usePathname, useRouter } from 'next/navigation';

type BookItemProps = {
  book: IBook | null;
  causedBy: CausedByProps;
};

function BookItem({ book, causedBy }: BookItemProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const path = usePathname();

  const openDetailBook = () => {
    if (causedBy === 'detail') {
      return;
    }
    dispatch(getByIdThunk(book?._id || '')).then((r) => {
      if (r.meta.requestStatus === 'rejected') {
        return;
      }
      router.push(`${path}/${book?._id}`, { scroll: false });
    });
  };

  const handleClick = async () => {
    try {
      await notiflixConfirm('delete');
      dispatch(removeByIdThunk(book?._id || ''));
    } catch (error) {}
  };
  return (
    <BookItemWrapperStyled className={causedBy}>
      <Image
        onClick={openDetailBook}
        src={book?.imageUrl || '/defaultBook.png'}
        alt="book image"
        className="img"
        width={136}
        height={208}
      />
      <div className="bottom-box">
        <div className="text-box">
          <h3 className="title" title={book?.title}>
            {book?.title}
          </h3>
          <p className="author">{book?.author}</p>
          {causedBy === 'detail' && (
            <p className="total-page">{book?.totalPages} pages</p>
          )}
        </div>
        {causedBy === 'library' && (
          <button className="btn btn-delete" onClick={handleClick}>
            <svg className="icon" width={14} height={14}>
              <use href="/sprite.svg#icon-delete"></use>
            </svg>
          </button>
        )}
      </div>
    </BookItemWrapperStyled>
  );
}

export default BookItem;
