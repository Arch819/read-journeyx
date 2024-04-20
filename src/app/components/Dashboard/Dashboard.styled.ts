import styled from '@emotion/styled';

export type DashboardWrapperProps = {
  gapM: string;
  gapT: string;
  gapD?: string;
  jc?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'normal'
    | 'space-between'
    | 'space-around'
    | ' space-evenly'
    | 'stretch'
    | string
    | undefined;
};

export const DashboardWrapperStyled = styled.div<DashboardWrapperProps>`
  display: grid;
  gap: ${(props) => props.gapM};
  padding: 20px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    grid-template-columns: 295px 1fr;
    gap: ${(props) => props.gapT};
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: ${(props) => props.gapD};
    padding: 40px 20px 20px;
    justify-content: ${(props) => props.jc};
  }
`;
