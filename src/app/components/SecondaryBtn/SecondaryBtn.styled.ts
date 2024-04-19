import styled from '@emotion/styled';

export const BtnStyled = styled.button`
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid var(--border-color);
  background: transparent;

  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
  color: var(--primary-color);
  transition: border var(--transition);

  &:disabled {
    color: var(--secondary-color);
    cursor: no-drop;
  }

  &:not(:disabled):is(:hover, :focus) {
    border-color: inherit;
  }
  @media screen and (min-width: 768px) {
    padding: 12px 28px;
    font-size: 16px;
    line-height: 1.12;
  }
`;
