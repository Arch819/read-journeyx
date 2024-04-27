import PrivatePagesWrapper from '@/app/components/PrivatePagesWrapper';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
  dashboard: React.ReactNode;
}

function Layout({ children, modal, dashboard }: LayoutProps) {
  return (
    <>
      {modal}
      <PrivatePagesWrapper>
        {dashboard}
        {children}
      </PrivatePagesWrapper>
    </>
  );
}

export default Layout;
