import styled from '@emotion/styled';

export const LogOutBtnStyled = styled.button`
  padding: 10px 20px;
  border: 1px solid var(--border-color);
  border-radius: 30px;
  background: transparent;

  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
  color: var(--primary-color);
  transition:
    color var(--transition),
    background var(--transition),
    border var(--transition);

  &:is(:hover, :focus) {
    border-color: transparent;
    background: #f9f9f9;
    color: #1f1f1f;
  }

  @media screen and (min-width: 768px) {
    padding: 12px 28px;
    font-size: 16px;
    line-height: 1.12;
  }
`;
