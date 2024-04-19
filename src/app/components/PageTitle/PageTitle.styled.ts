import styled from '@emotion/styled';

interface IPageTitle {
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
}

export const PageTitleStyled = styled.h2<IPageTitle>`
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
  margin-right: ${(props) => props.mr};
  font-size: 20px;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.14;
  }
`;
