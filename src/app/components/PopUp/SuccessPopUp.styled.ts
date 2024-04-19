import styled from '@emotion/styled';

export const PopUpWrapperStyled = styled.div`
  padding: 60px 46px;
  @media screen and (min-width: 768px) {
    width: 342px;
    padding: 50px;
  }
`;

export const PopUpImgStyled = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 68px;
    height: 70px;
    margin-bottom: 32px;
  }
`;

export const PopUpTitleStyled = styled.h3`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1;
  color: var(--primary-color);

  @media screen and (min-width: 768px) {
    margin-bottom: 14px;
    font-size: 20px;
  }
`;

export const PopUpTextStyled = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--secondary-color);
  span {
    color: var(--primary-color);
  }
`;
