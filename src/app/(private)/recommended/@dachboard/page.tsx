import React from 'react';
import Dashboard from '@/app/components/Dashboard';
import DashboardForm from '@/app/components/DashboardForm';
import Filter from '@/app/components/form/FilterForm';
import AppDescription from '@/app/components/AppDescription';
import QuoteStatic from '@/app/components/QuoteStatic';

type PageProps = {};

function Page({}: PageProps) {
  return (
    <Dashboard gapD="20px" gapT="32px" gapM="20px">
      <DashboardForm titleText="Filters:">
        <Filter />
      </DashboardForm>
      <AppDescription />
      <QuoteStatic />
    </Dashboard>
  );
}

export default Page;
