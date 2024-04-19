import Dashboard from '@/app/components/Dashboard';
import DashboardForm from '@/app/components/DashboardForm';
import MyLibraryBooks from '@/app/components/MyLibraryBooks';
import PrivatePagesWrapper from '@/app/components/PrivatePagesWrapper';
import AddBookForm from '@/app/components/form/AddBookForm';
import React from 'react';

type LibraryProps = {};

function Library({}: LibraryProps) {
  return (
    <PrivatePagesWrapper>
      <Dashboard>
        <DashboardForm titleText="Create your library:">
          <AddBookForm />
        </DashboardForm>
      </Dashboard>
      <MyLibraryBooks />
    </PrivatePagesWrapper>
  );
}

export default Library;
