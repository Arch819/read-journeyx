import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  PagesReadStyled,
  PercentageReadStyled,
  StatisticBlockStyled,
  StatisticWrapperStyled,
  StatisticsTextStyled,
} from './StatisticsVariant.styled';

type StatisticsVariantProps = {
  percentageRead: number;
  pagesRead: number;
};

function StatisticsVariant({
  percentageRead = 0,
  pagesRead = 0,
}: StatisticsVariantProps) {
  return (
    <StatisticWrapperStyled>
      <StatisticsTextStyled>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </StatisticsTextStyled>
      <StatisticBlockStyled className="secondary-container">
        <CircularProgressbar
          styles={{
            path: { stroke: '#30B94D' },
            trail: { stroke: '#1F1F1F' },
            text: {
              fill: '#F9F9F9',
              fontSize: '18px',
              fontFamily: 'inherit',
            },
          }}
          value={percentageRead}
          text="100%"
        />
        <div>
          <PercentageReadStyled>{percentageRead}%</PercentageReadStyled>
          <PagesReadStyled>{pagesRead} pages read</PagesReadStyled>
        </div>
      </StatisticBlockStyled>
    </StatisticWrapperStyled>
  );
}

export default StatisticsVariant;
