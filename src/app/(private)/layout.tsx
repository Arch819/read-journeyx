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

type PopUpProps = '' | 'detailBook' | 'successAddedBook' | 'bookIsRead';

export default function Layout(props: Props) {
  const [popUp, setPopUp] = useState<PopUpProps>('');

  const renderPopUp = () => {
    switch (popUp) {
      case 'detailBook':
        return <DetailBook />;
      case 'successAddedBook':
        return <SuccessAddedBook />;
      case 'bookIsRead':
        return <BookIsRead />;
      default:
        return;
    }
  };

  return (
    <>
      <Header />
      <main className="private-main">
        <section>
          <div className="container">{props.children}</div>
        </section>
      </main>
      <DialogComponent
        open={Boolean(popUp)}
        onClose={() => setPopUp('')}
        popUp={renderPopUp()}
      ></DialogComponent>
    </>
  );
}
