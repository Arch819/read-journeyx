import styled from '@emotion/styled';

export const EmptyProgressWrapperStyled = styled.div`
  margin-top: 14px;
`;

export const EmptyProgressTextStyled = styled.p`
  margin-bottom: 20px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--secondary-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 60px;
  }
`;

export const EmptyProgressImgBoxStyled = styled.div`
  margin: 0 auto;
  width: 80px;
  height: 80px;

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;
