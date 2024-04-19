'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import {
  NavLinkStyled,
  NavListStyled,
  NavigationStyle,
} from './Navigation.styled';

type NavigationProps = {
  onClose?: () => void;
};

export default function Navigation({ onClose }: NavigationProps) {
  const currentPath = usePathname();

  return (
    <NavigationStyle className="nav">
      <NavListStyled>
        <li>
          <NavLinkStyled
            href="/recommended"
            className={currentPath === '/recommended' ? 'active' : undefined}
            onClick={onClose}
          >
            Home
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            href="/library"
            className={currentPath === '/library' ? 'active' : undefined}
            onClick={onClose}
          >
            My library
          </NavLinkStyled>
        </li>
      </NavListStyled>
    </NavigationStyle>
  );
}
