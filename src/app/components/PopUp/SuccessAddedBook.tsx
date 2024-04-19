import React from 'react';
import {
  PopUpImgStyled,
  PopUpTextStyled,
  PopUpTitleStyled,
  PopUpWrapperStyled,
} from './SuccessPopUp.styled';

type SuccessAddedBookProps = {};

function SuccessAddedBook({}: SuccessAddedBookProps) {
  return (
    <PopUpWrapperStyled>
      <PopUpImgStyled>
        <picture>
          <source
            media="(max-width:767px)"
            srcSet="/mobile/icon-thumb-mob.png 1x, /mobile/icon-thumb-mob@2x.png 2x"
          />
          <source
            media="(min-width:768px)"
            srcSet="/desktop/icon-thumb-des.png 1x, /desktop/icon-thumb-des@2x.png 2x"
          />
          <img
            src="/iPhone15.png"
            srcSet="/mobile/icon-thumb-mob.png 1x, /mobile/icon-thumb-mob@2x.png 2x"
            alt="thumb"
          />
        </picture>
      </PopUpImgStyled>
      <PopUpTitleStyled>Good job</PopUpTitleStyled>
      <PopUpTextStyled>
        Your book is now in <span>the library!</span> The joy knows no bounds
        and now you can start your training
      </PopUpTextStyled>
    </PopUpWrapperStyled>
  );
}

export default SuccessAddedBook;
