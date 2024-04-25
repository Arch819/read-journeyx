'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import DialogComponent from '../components/DialogComponent';
import DetailBook from '../components/PopUp/DetailBook';
import SuccessAddedBook from '../components/PopUp/SuccessAddedBook';
import BookIsRead from '../components/PopUp/BookIsRead';

type Props = {
  children?: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <>
      <Header />
      <main className="private-main">
        <section>
          <div className="container">{props.children}</div>
        </section>
      </main>
    </>
  );
}
