'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import {
  NavLinkStyled,
  NavListStyled,
  NavigationStyle,
} from './Navigation.styled';

type NavigationProps = {};

export default function Navigation({}: NavigationProps) {
  const currentPath = usePathname();

  console.dir(currentPath);

  return (
    <NavigationStyle>
      <NavListStyled>
        <li>
          <NavLinkStyled
            href="/recommended"
            className={currentPath === '/recommended' ? 'active' : undefined}
          >
            Home
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            href="/library"
            className={currentPath === '/library' ? 'active' : undefined}
          >
            My library
          </NavLinkStyled>
        </li>
      </NavListStyled>
    </NavigationStyle>
  );
}
