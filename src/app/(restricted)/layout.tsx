import React from 'react';
import Header from '../components/Header';

type Props = {
  children?: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <>
      <Header />
      <main>
        <section>{props.children}</section>
      </main>
    </>
  );
}
