import React from 'react';
import {
  EmptyProgressImgBoxStyled,
  EmptyProgressTextStyled,
  EmptyProgressWrapperStyled,
} from './EmptyProgress.styled';

type EmptyProgressProps = {};

function EmptyProgress({}: EmptyProgressProps) {
  return (
    <EmptyProgressWrapperStyled>
      <EmptyProgressTextStyled>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </EmptyProgressTextStyled>
      <EmptyProgressImgBoxStyled>
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/mobile/icon-book-mob.png 1x, /mobile/icon-book-mob@2x.png 2x"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/desktop/icon-book-des.png 1x, /desktop/icon-book-des@2x.png 2x"
          />
          <img
            src="/mobile/icon-book-mob.png"
            alt="books"
            srcSet="/mobile/icon-book-mob.png 1x, /mobile/icon-book-mob@2x.png 2x"
          />
        </picture>
      </EmptyProgressImgBoxStyled>
    </EmptyProgressWrapperStyled>
  );
}

export default EmptyProgress;
