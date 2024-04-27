import PrivatePagesWrapper from '@/app/components/PrivatePagesWrapper';
import React from 'react';

export type LayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
  dashboard: React.ReactNode;
};

export default function Layout({ children, modal, dashboard }: LayoutProps) {
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
