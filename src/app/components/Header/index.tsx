'use client';

import React from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';
import AuthCorner from '../AuthCorner';
import { HeaderContainerStyled } from './Header.styled';

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  return (
    <header>
      <HeaderContainerStyled className="container">
        <Logo />
        <Navigation />
        <AuthCorner />
      </HeaderContainerStyled>
    </header>
  );
}
