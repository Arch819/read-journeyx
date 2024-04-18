'use client';

import React from 'react';
import getFirstLetter from '@/utils/getFirstLetter';
import LogOutBtn from '../LogOutBtn';
import sprite from '@/img/sprite.svg';

import {
  AuthAvatarStyled,
  AuthCornerBoxStyled,
  AuthInfoStyled,
  AuthNameStyled,
  BurgerBtnStyled,
} from './AuthCorner.styled';

type AuthCornerProps = { onOpen(): void };

export default function AuthCorner({ onOpen }: AuthCornerProps) {
  const isMobile = true;
  const name = 'Lara';
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
            <use href={`${sprite}#icon`}></use>
          </svg>
        </BurgerBtnStyled>
      ) : (
        <LogOutBtn />
      )}
    </AuthCornerBoxStyled>
  );
}
