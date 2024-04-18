'use client';

import React from 'react';
import SignForm from '@/app/components/form/SignInUp';
import ProgramView from '@/app/components/ProgramView';
import { SignInContainerStyled } from './SignIn.styled';
import { FormWrapperStyled } from '@/app/components/form/Forms.styled';
import Logo from '@/app/components/Logo';

export interface ISignInProps {}

export default function SignIn(props: ISignInProps) {
  return (
    <SignInContainerStyled className="container">
      <FormWrapperStyled className="content-wrapper">
        <Logo textShow />
        <SignForm event="signIn" />
      </FormWrapperStyled>
      <ProgramView />
    </SignInContainerStyled>
  );
}
