import styled from '@emotion/styled';

export const ProgramViewBoxStyled = styled.div`
  padding: 20px 40px 0;

  img {
    max-width: 255px;
    height: 330px;
    /* height: 100%; */
    /* object-fit: contain; */
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    display: block;
    padding: 80px 98px 0;
    img {
      max-width: 405px;
      height: 656px;
    }
  }
`;
