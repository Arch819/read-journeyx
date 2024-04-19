import AppDescription from '@/app/components/AppDescription';
import Dashboard from '@/app/components/Dashboard';
import DashboardForm from '@/app/components/DashboardForm';
import PrivatePagesWrapper from '@/app/components/PrivatePagesWrapper';
import QuoteStatic from '@/app/components/QuoteStatic';
import RecommendedBooks from '@/app/components/RecommendedBooks';
import Filter from '@/app/components/form/FilterForm';
import React from 'react';

type RecommendedProps = {};

function Recommended({}: RecommendedProps) {
  return (
    <PrivatePagesWrapper>
      <Dashboard>
        <DashboardForm titleText="Filters:">
          <Filter />
        </DashboardForm>
        <AppDescription />
        <QuoteStatic />
      </Dashboard>
      <RecommendedBooks />
    </PrivatePagesWrapper>
  );
}

export default Recommended;
