import styled from '@emotion/styled';

export const MobileMenuBackdropStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const MobileMenuContainerStyled = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 34px;
  padding-bottom: 40px;
  background: var(--bg-container-secondary);
`;

export const MobileMenuCloseStyled = styled.button`
  margin-right: 40px;
  margin-left: auto;
`;
