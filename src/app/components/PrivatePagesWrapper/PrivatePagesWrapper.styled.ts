import styled from '@emotion/styled';

export const PrivatePagesWrapperStyled = styled.div`
  display: grid;
  gap: 10px;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: 354px 1fr;
  }
`;
