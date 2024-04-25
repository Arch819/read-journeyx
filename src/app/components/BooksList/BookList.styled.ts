import styled from '@emotion/styled';

export const BookListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  li {
    flex-basis: calc((100% - 20px) / 2);
  }
  @media screen and (min-width: 768px) {
    gap: 28px 25px;

    li {
      flex-basis: calc((100% - 75px) / 4);
    }
  }
  @media screen and (min-width: 1440px) {
    gap: 28px 20px;
    li {
      flex-basis: calc((100% - 80px) / 5);
    }
  }
`;
