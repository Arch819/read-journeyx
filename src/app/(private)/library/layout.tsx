import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
  dashboard: React.ReactNode;
}

function Layout({ children, modal, dashboard }: LayoutProps) {
  return (
    <>
      {dashboard}
      {modal}
      {children}
    </>
  );
}

export default Layout;
