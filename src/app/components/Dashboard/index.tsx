'use client';

import React from 'react';
import { DashboardWrapperStyled } from './Dashboard.styled';


type DashboardProps = {
  children?: React.ReactNode;
  gapM: string;
  gapT: string;
  gapD?: string;
  jc?: string;
};

function Dashboard({ children, gapM, gapT, gapD, jc }: DashboardProps) {
  return (
    <DashboardWrapperStyled
      className="content-wrapper"
      gapM={gapM}
      gapT={gapT}
      gapD={gapD}
      jc={jc}
    >
      {children}
    </DashboardWrapperStyled>
  );
}

export default Dashboard;
