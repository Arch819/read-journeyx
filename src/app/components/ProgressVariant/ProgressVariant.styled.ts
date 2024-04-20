import styled from '@emotion/styled';

export const ToggleProgressVariantBoxStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ProgressVariantBntStyled = styled.button`
  .icon {
    stroke: var(--secondary-color);
    transition: stroke var(--transition);
  }
  &.active .icon {
    stroke: var(--primary-color);
  }

  @media screen and (min-width: 768px) {
    .icon {
      width: 20px;
      height: 20px;
    }
  }
`;
