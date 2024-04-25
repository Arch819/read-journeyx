import React from 'react';
import { LoaderBackdropStyled, LoaderContainerStyled } from './Loader.styled';
import Image from 'next/image';

type Props = {};

function Loader({}: Props) {
  return (
    <LoaderBackdropStyled>
      <LoaderContainerStyled>
        <Image
          src="/loader.gif"
          alt="loader flipping through a book"
          width={120}
          height={120}
        />
      </LoaderContainerStyled>
    </LoaderBackdropStyled>
  );
}

export default Loader;
