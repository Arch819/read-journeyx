import styled from '@emotion/styled';
import Link from 'next/link';

export const NavigationStyle = styled.nav`
  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: 94px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 218px;
  }
`;

export const NavListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;

export const NavLinkStyled = styled(Link)`
  display: block;
  position: relative;
  padding: 4px 0;
  overflow: hidden;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;

  color: var(--secondary-color);
  transition: color var(--transition);

  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    content: '';
    width: 100%;
    height: 3px;
    background: #4f92f7;
    border-radius: 8px;

    transform: translateX(-110%);
    transition: transform var(--transition);
  }

  &.active {
    color: var(--primary-color);
  }
  &.active::after {
    transform: translateX(0);
  }

  @media only screen and (min-width: 768px) {
    padding: 10px 0;

    font-size: 16px;
    line-height: 1.12;
  }
`;
