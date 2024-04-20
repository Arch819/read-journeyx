import styled from '@emotion/styled';

export const StatisticWrapperStyled = styled.div`
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 20px;
  }
`;

export const StatisticsTextStyled = styled.p`
  display: none;
  @media screen and (min-width: 1440px) {
    margin-bottom: 20px;
    display: block;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28;
    color: var(--secondary-color);
  }
`;

export const StatisticBlockStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 90px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    padding: 28px 90px;
  }
  @media only screen and (min-width: 1440px) {
    gap: 10px;
    padding: 20px 62px;
  }
`;

export const PercentageReadStyled = styled.p`
  position: relative;
  width: 95px;
  margin-bottom: 4px;
  margin-right: auto;
  margin-left: auto;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 14px;
    height: 14px;
    border-radius: 4px;
    background: #30b94d;
  }

  @media screen and (min-width: 768px) {
    width: 108px;
    margin-bottom: 8px;

    font-size: 20px;
    line-height: 1;
  }
`;

export const PagesReadStyled = styled.p`
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  color: var(--secondary-color);

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.6;
  }
`;
