import styled from '@emotion/styled';

export const QuoteStaticWrapperStyled = styled.div`
  display: none;
  @media only screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 15px 20px;
    border-radius: 12px;
    background: var(--bg-container-secondary);
  }
`;

export const QuoteStaticTextStyled = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--secondary-color);
  & span {
    color: var(--primary-color);
  }
`;
