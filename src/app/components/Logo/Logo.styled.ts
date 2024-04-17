import styled from '@emotion/styled';

type LogoLinkProps = {
  textShow?: boolean;
};

export const LogoLinkStyled = styled.a<LogoLinkProps>`
  .logo-text {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .logo-text {
      display: ${({ textShow }) => (textShow ? 'inline' : 'none')};
      font-size: 18px;
      font-weight: 700;
      line-height: 1;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 1440px) {
    .logo-text {
      display: inline;
    }
  }
`;
