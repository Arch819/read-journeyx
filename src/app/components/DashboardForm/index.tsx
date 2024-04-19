'use client';

import React from 'react';
import { DashboardFormTitleStyled } from './DashboardForm.styled';

type DashboardFormProps = {
  children: React.ReactNode;
  titleText?: string;
};

function DashboardForm({ children, titleText }: DashboardFormProps) {
  return (
    <div>
      <DashboardFormTitleStyled>{titleText}</DashboardFormTitleStyled>
      {children}
    </div>
  );
}

export default DashboardForm;
