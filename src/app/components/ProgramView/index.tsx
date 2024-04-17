'use client';

import React from 'react';
import imgMobile from '../../../img/mobile/iPhone15-mob.png';
import imgMobile2x from '../../../img/mobile/iPhone15-mob2x.png';
import imgDesktop from '../../../img/desktop/iPhone15-des.png';
import imgDesktop2x from '../../../img/desktop/iPhone15-des@2x.png';
import Image from 'next/image';
import { ProgramViewBoxStyled } from './ProgramView.styled';

type ProgramViewProps = {};

export default function ProgramView(props: ProgramViewProps) {
  return (
    <ProgramViewBoxStyled className="content-wrapper">
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={`${imgMobile} 1x, ${imgMobile2x} 2x`}
        />
        <source
          media="(min-width: 1440px)"
          srcSet={`${imgDesktop} 1x, ${imgDesktop2x} 2x`}
        />
        <Image
          src={imgMobile}
          alt="view of the program in the mobile version"
        />
      </picture>
    </ProgramViewBoxStyled>
  );
}
