'use client';

import React from 'react';
import Image from 'next/image';
import {
  QuoteStaticTextStyled,
  QuoteStaticWrapperStyled,
} from './QuoteStatic.styled';

type QuoteStaticProps = {};

function QuoteStatic({}: QuoteStaticProps) {
  return (
    <QuoteStaticWrapperStyled>
      <Image
        src="/desktop/icon-book-des.png"
        alt="books"
        width={40}
        height={40}
      />
      <QuoteStaticTextStyled>
        &#34;Books are <span>windows</span> to the world, and reading is a
        journey into the unknown.&#34;
      </QuoteStaticTextStyled>
    </QuoteStaticWrapperStyled>
  );
}

export default QuoteStatic;
