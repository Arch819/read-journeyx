import styled from '@emotion/styled';
import { Dialog, DialogContent } from '@mui/material';

export const DialogStyled = styled(Dialog)`
  .MuiPaper-root {
    max-width: 335px;
    border-radius: 0;
    background: none;
  }
  @media only screen and (min-width: 768px) {
    .MuiPaper-root {
      max-width: 500px;
    }
  }
`;

export const DialogCloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  color: var(--primary-color); //delete
`;

export const DialogContentStyled = styled(DialogContent)`
  padding: 0;
  border-radius: 12px;
  background: var(--bg-container);
  text-align: center;
`;
