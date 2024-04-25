import styled from '@emotion/styled';
import Link from 'next/link';

export const AppDesWrapperStyled = styled.div`
  padding: 20px;
  border-radius: 12px;
  background: var(--bg-container-secondary);
`;

export const AppDesTitleStyled = styled.h3`
  margin-bottom: 20px;

  font-size: 18px;
  line-height: 1;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 20px;
  }
`;

export const DesListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 26px;
  }
`;

export const DesItemStyled = styled.li`
  display: flex;
  gap: 12px;

  .des-number {
    width: 40px;
    height: 40px;
    display: flex;

    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: #f9f9f9;
    border-radius: 100%;

    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    color: #1f1f1f;
  }

  .des-text {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.28;
    color: var(--secondary-color);
    word-break: keep-all;
  }
  .des-text-h {
    color: var(--primary-color);
  }
  @media screen and (min-width: 768px) {
    gap: 12px;
    .des-number {
      width: 44px;
      height: 44px;

      font-size: 20px;
    }
  }
`;

export const AppDesLinkStyled = styled(Link)`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: var(--secondary-color);
  text-decoration: underline;
  transition: color var(--transition);

  &:is(:hover, :focus) {
    color: var(--primary-color);
  }
`;
