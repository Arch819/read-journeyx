'use client';

import React from 'react';
import { DashboardWrapperStyled } from './Dashboard.styled';

type DashboardProps = {
  children?: React.ReactNode;
};

function Dashboard({ children }: DashboardProps) {
  return (
    <DashboardWrapperStyled className="content-wrapper">
      {children}
    </DashboardWrapperStyled>
  );
}

export default Dashboard;
