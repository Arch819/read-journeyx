'use client';

import React from 'react';
import getFirstLetter from '@/utils/getFirstLetter';
import LogOutBtn from '../LogOutBtn';
import { useSelector } from 'react-redux';
import { selectName } from '@/lib/auth/authSelectors';
import { selectDevice } from '@/lib/appState/appStateSelectors';
import {
  AuthAvatarStyled,
  AuthCornerBoxStyled,
  AuthInfoStyled,
  AuthNameStyled,
  BurgerBtnStyled,
} from './AuthCorner.styled';

type AuthCornerProps = { onOpen: () => void };

export default function AuthCorner({ onOpen }: AuthCornerProps) {
  const device = useSelector(selectDevice);
  const name = useSelector(selectName);
  return (
    <AuthCornerBoxStyled>
      <AuthInfoStyled>
        <AuthAvatarStyled>
          <span className="avatar-text">{getFirstLetter(name)}</span>
        </AuthAvatarStyled>
        <AuthNameStyled>{name}</AuthNameStyled>
      </AuthInfoStyled>
      {device === 'mobile' ? (
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
