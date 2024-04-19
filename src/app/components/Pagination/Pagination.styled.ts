import styled from '@emotion/styled';

export const PaginationWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PaginationBtnStyled = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  &.btn {
    border: 1px solid var(--border-color);
  }

  color: var(--primary-color); // delete
  &:disabled {
    color: var(--secondary-color);
    cursor: not-allowed;
  }

  &:not(:disabled):is(:hover, :focus) {
    border-color: var(--primary-color);
  }

  .icon.left {
    transform: rotate(90deg);
  }
  .icon.right {
    transform: rotate(-90deg);
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;

    .icon {
      width: 20px;
      height: 20px;
    }
  }
`;
