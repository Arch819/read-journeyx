import React from 'react';
import Dashboard from '@/app/components/Dashboard';
import DashboardForm from '@/app/components/DashboardForm';
import AddBookForm from '@/app/components/form/AddBookForm';

type PageProps = {};

function Page({}: PageProps) {
  return (
    <Dashboard gapM="20px" gapT="32px" jc="space-between">
      <DashboardForm titleText="Create your library:">
        <AddBookForm />
      </DashboardForm>
    </Dashboard>
  );
}

export default Page;
