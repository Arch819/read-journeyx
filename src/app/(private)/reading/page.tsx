'use client';

import React, { useState } from 'react';
import Dashboard from '@/app/components/Dashboard';
import PrivatePagesWrapper from '@/app/components/PrivatePagesWrapper';
import MyReadingBookWrapper from '@/app/components/MyReadingBookWrapper';
import ReadingPageForm from '@/app/components/form/ReadingPageForm';
import DashboardForm from '@/app/components/DashboardForm';
import DetailsProgress from '@/app/components/DetailsProgress';
import ProgressVariant from '@/app/components/ProgressVariant/ToggleProgressVariant';
import StatisticsVariant from '@/app/components/ProgressVariant/StatisticsVariant';
import EmptyProgress from '@/app/components/ProgressVariant/EmptyProgress';
import DairyVariant from '@/app/components/ProgressVariant/DairyVariant';

type ReadingProps = {};

export type VariantProps = 'dairy' | 'statistics' | 'empty';

function Reading({}: ReadingProps) {
  const [statusReading, setStatusReading] = useState(false);
  const [variantProgress, setVariantProgress] = useState<VariantProps>('empty');

  const pageRead = 0;
  const percentageRead = 0;

  const handleChangeVariant = (variant: VariantProps) => {
    setVariantProgress(variant);
  };

  const renderVariantProgress = () => {
    switch (variantProgress) {
      case 'empty':
        return <EmptyProgress />;
      case 'dairy':
        return (
          <StatisticsVariant
            percentageRead={percentageRead}
            pagesRead={pageRead}
          />
        );
      case 'statistics':
        return <DairyVariant />;
    }
  };

  return (
    <PrivatePagesWrapper>
      <Dashboard gapM="40px" gapT="40px">
        <DashboardForm titleText={statusReading ? 'Stop page:' : 'Start page:'}>
          <ReadingPageForm
            statusReading={statusReading}
            changeStatus={() => setStatusReading((prev) => !prev)}
          />
        </DashboardForm>
        <DetailsProgress
          textTitle="Statistics"
          progressVariant={
            variantProgress !== 'empty' && (
              <ProgressVariant
                variant={variantProgress}
                changeVariant={handleChangeVariant}
              />
            )
          }
        >
          {renderVariantProgress()}
        </DetailsProgress>
      </Dashboard>
      <MyReadingBookWrapper />
    </PrivatePagesWrapper>
  );
}

export default Reading;
