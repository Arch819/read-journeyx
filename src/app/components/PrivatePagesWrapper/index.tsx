'use client';

import React from 'react';
import { PrivatePagesWrapperStyled } from './PrivatePagesWrapper.styled';

type PrivatePagesWrapperProps = {
  children: React.ReactNode;
};

function PrivatePagesWrapper({ children }: PrivatePagesWrapperProps) {
  return <PrivatePagesWrapperStyled>{children}</PrivatePagesWrapperStyled>;
}

export default PrivatePagesWrapper;
