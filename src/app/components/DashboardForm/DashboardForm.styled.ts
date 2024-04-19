import styled from '@emotion/styled';

export const DashboardFormTitleStyled = styled.h3`
  margin-bottom: 8px;
  margin-left: 14px;

  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;

export const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-bottom: 38px;
  }
`;
