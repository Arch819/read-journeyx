'use client';

import React from 'react';
import getFirstLetter from '@/utils/getFirstLetter';
import LogOutBtn from '../LogOutBtn';
import { useSelector } from 'react-redux';
import { selectIsMobile } from '@/redux/appState/appStateSelectors';
import MobileMenu from '../MobileMenu';
import {
  AuthAvatarStyled,
  AuthCornerBoxStyled,
  AuthInfoStyled,
  AuthNameStyled,
} from './AuthCorner.styled';

type AuthCornerProps = {};

export default function AuthCorner({}: AuthCornerProps) {
  const isMobile = false;
  const name = 'Lara';
  return (
    <AuthCornerBoxStyled>
      <AuthInfoStyled>
        <AuthAvatarStyled>
          <span className="avatar-text">{getFirstLetter(name)}</span>
        </AuthAvatarStyled>
        <AuthNameStyled>{name}</AuthNameStyled>
      </AuthInfoStyled>
      {isMobile ? <MobileMenu /> : <LogOutBtn />}
    </AuthCornerBoxStyled>
  );
}
