'use client';

import Link from 'next/link';
import React from 'react';
import {
  AppDesLinkStyled,
  AppDesTitleStyled,
  AppDesWrapperStyled,
  DesItemStyled,
  DesListStyled,
} from './AppDescription.styled';

type AppDescriptionProps = {};

function AppDescription({}: AppDescriptionProps) {
  return (
    <AppDesWrapperStyled>
      <AppDesTitleStyled>Start your workout</AppDesTitleStyled>
      <DesListStyled>
        <DesItemStyled>
          <div className="des-number">1</div>
          <p className="des-text">
            <span className="des-text-h">Create a personal library: </span>
            add the books you intend to read to it.
          </p>
        </DesItemStyled>
        <DesItemStyled>
          <div className="des-number">2</div>
          <p className="des-text">
            <span className="des-text-h">Create your first workout: </span>
            define a goal, choose a period, start training.
          </p>
        </DesItemStyled>
      </DesListStyled>
      <AppDesLinkStyled href="/library">
        My library{' '}
        <svg className="icon" width={24} height={24}>
          <use href="/sprite.svg#icon-arrow-left"></use>
        </svg>
      </AppDesLinkStyled>
    </AppDesWrapperStyled>
  );
}

export default AppDescription;
