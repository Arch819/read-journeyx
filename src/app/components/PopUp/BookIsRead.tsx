import React from 'react';
import {
  PopUpImgStyled,
  PopUpTextStyled,
  PopUpTitleStyled,
  PopUpWrapperStyled,
} from './SuccessPopUp.styled';

type BookIsReadProps = {};

function BookIsRead({}: BookIsReadProps) {
  return (
    <PopUpWrapperStyled>
      <PopUpImgStyled>
        <picture>
          <source
            media="(max-width:767px)"
            srcSet="/mobile/icon-book-mob.png 1x, /mobile/icon-book-mob@2x.png 2x"
          />
          <source
            media="(min-width:768px)"
            srcSet="/desktop/icon-book-des.png 1x, /desktop/icon-book-des@2x.png 2x"
          />
          <img
            src="/iPhone15.png"
            srcSet="/mobile/icon-book-mob.png 1x, /mobile/icon-book-mob@2x.png 2x"
            alt="thumb"
          />
        </picture>
      </PopUpImgStyled>
      <PopUpTitleStyled>The book is read</PopUpTitleStyled>
      <PopUpTextStyled>
        It was an <span>exciting journey</span>, where each page revealed new
        horizons, and the characters became inseparable friends.
      </PopUpTextStyled>
    </PopUpWrapperStyled>
  );
}

export default BookIsRead;
