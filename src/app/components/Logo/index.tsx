'use client';

import React from 'react';
import { LogoLinkStyled } from './Logo.styled';

type LogoProps = {
  textShow?: boolean;
};

export default function Logo(props: LogoProps) {
  return (
    <div>
      <LogoLinkStyled
        href="/"
        aria-label="link to home"
        textShow={props.textShow}
      >
        <svg width={42} height={17} className="logo-icon">
          <use href="/sprite.svg#icon-logo"></use>
        </svg>
        <span className="logo-text">read journey</span>
      </LogoLinkStyled>
    </div>
  );
}
