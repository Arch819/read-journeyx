import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
  dashboard: React.ReactNode;
};

export default function Layout({ children, modal, dashboard }: LayoutProps) {
  return (
    <>
      {dashboard}
      {modal}
      {children}
    </>
  );
}
