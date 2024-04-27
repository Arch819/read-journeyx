import React from 'react';
import SecondaryBtn from '../SecondaryBtn';
import BookItem from '../BookItem';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectDetailBook } from '@/lib/books/booksSelectors';
import { DetailBookWrapperStyled } from './DetailBook.styled';
import { addBookByIdThunk } from '@/lib/books/booksThunk';
import { notiflixMessage } from '@/utils/notiflixMessages';
import { useRouter } from 'next/navigation';

export type CausedByProps =
  | 'library'
  | 'recommended'
  | 'reading'
  | 'dashBoardRecom'
  | 'detail';

export type DetailBookProps = {
  causedBy: CausedByProps;
};

function DetailBook({ causedBy }: DetailBookProps) {
  const dispatch = useAppDispatch();
  const detailBook = useAppSelector(selectDetailBook);
  const router = useRouter();

  const handleClick = () => {
    if (causedBy === 'recommended') {
      dispatch(addBookByIdThunk(detailBook?._id)).then(
        (r) =>
          r.meta.requestStatus === 'fulfilled' &&
          notiflixMessage(
            'ok',
            'Еhe book has been successfully added to your library',
          ),
      );
    }
    if (causedBy === 'library') {
      router.push('/reading');
    }
  };
  return (
    <DetailBookWrapperStyled>
      <div>
        <BookItem book={detailBook} causedBy="detail" />
      </div>
      <SecondaryBtn
        text={causedBy === 'library' ? 'Start reading' : 'Add to library'}
        onClick={handleClick}
      ></SecondaryBtn>
    </DetailBookWrapperStyled>
  );
}

export default DetailBook;
