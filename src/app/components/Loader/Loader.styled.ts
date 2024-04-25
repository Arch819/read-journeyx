import styled from '@emotion/styled';

export const LoaderBackdropStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1400;
  background-color: #1f1f1f77;
`;

export const LoaderContainerStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1500;
  transform: translate(-50%, -50%);
`;
