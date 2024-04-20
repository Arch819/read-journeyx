'use client';

import React from 'react';
import getFirstLetter from '@/utils/getFirstLetter';
import LogOutBtn from '../LogOutBtn';
import { useSelector } from 'react-redux';

import {
  AuthAvatarStyled,
  AuthCornerBoxStyled,
  AuthInfoStyled,
  AuthNameStyled,
  BurgerBtnStyled,
} from './AuthCorner.styled';
import { selectName } from '@/lib/auth/authSelectors';
import { selectIsMobile } from '@/lib/appState/appStateSelectors';

type AuthCornerProps = { onOpen(): void };

export default function AuthCorner({ onOpen }: AuthCornerProps) {
  const isMobile = useSelector(selectIsMobile);
  const name = useSelector(selectName);
  return (
    <AuthCornerBoxStyled>
      <AuthInfoStyled>
        <AuthAvatarStyled>
          <span className="avatar-text">{getFirstLetter(name)}</span>
        </AuthAvatarStyled>
        <AuthNameStyled>{name}</AuthNameStyled>
      </AuthInfoStyled>
      {isMobile ? (
        <BurgerBtnStyled className="btn" onClick={onOpen}>
          <svg width={28} height={28} fill="#f9f9f9">
            <use href="/sprite.svg#icon-burger-menu"></use>
          </svg>
        </BurgerBtnStyled>
      ) : (
        <LogOutBtn />
      )}
    </AuthCornerBoxStyled>
  );
}
