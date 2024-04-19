import styled from '@emotion/styled';

export const DashboardWrapperStyled = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    grid-template-columns: 295px 1fr;
    gap: 32px;
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 20px 20px;
  }
`;
