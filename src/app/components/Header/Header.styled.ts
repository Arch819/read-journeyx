import styled from '@emotion/styled';

export const HeaderContainerStyled = styled.div`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-container);
  border-radius: 15px;
  @media screen and (max-width: 767px) {
    & > .nav {
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    padding: 16px;
  }
`;

export const BurgerBtnStyled = styled.button`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
