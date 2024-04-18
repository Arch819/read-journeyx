'use client';

import React from 'react';
import SignForm from '@/app/components/form/SignInUp';
import Logo from '@/app/components/Logo';
import ProgramView from '@/app/components/ProgramView';
import { FormWrapperStyled } from '@/app/components/form/Forms.styled';
import { SignInContainerStyled } from '../sign-in/SignIn.styled';

type SignUpProps = {};

export default function SignUp(props: SignUpProps) {
  return (
    <SignInContainerStyled className="container">
      <FormWrapperStyled className="content-wrapper">
        <Logo textShow />
        <SignForm event="signUp" />
      </FormWrapperStyled>
      <ProgramView />
    </SignInContainerStyled>
  );
}
