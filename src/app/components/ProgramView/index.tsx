import React from 'react';
import { ProgramViewBoxStyled } from './ProgramView.styled';

type ProgramViewProps = {};

export default function ProgramView(props: ProgramViewProps) {
  return (
    <ProgramViewBoxStyled className="content-wrapper">
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet="/mobile/iPhone15-mob.png 1x, /mobile/iPhone15-mob2x.png 2x"
        />
        <source
          media="(min-width: 1440px)"
          srcSet="/desktop/iPhone15-des.png 1x, /desktop/iPhone15-des@2x.png 2x"
        />
        <img
          src="/mobile/iPhone15-mob.png"
          srcSet="/mobile/iPhone15-mob.png 1x, /mobile/iPhone15-mob2x.png 2x"
          alt="view of the program in the mobile version"
        />
      </picture>
    </ProgramViewBoxStyled>
  );
}
