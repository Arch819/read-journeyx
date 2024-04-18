'use client';

import React, { useState } from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';
import AuthCorner from '../AuthCorner';
import { BurgerBtnStyled, HeaderContainerStyled } from './Header.styled';
import MobileMenu from '../MobileMenu';

type HeaderProps = {};

export default function Header({}: HeaderProps) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <header>
      <HeaderContainerStyled className="container">
        <Logo />
        <Navigation />
        <AuthCorner onOpen={()=>setOpen(true) } />
      </HeaderContainerStyled>
      <MobileMenu open={open} onClose={handleClose} />
    </header>
  );
}
