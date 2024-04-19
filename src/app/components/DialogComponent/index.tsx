import React from 'react';
import { Dialog, DialogContent, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import {
  DialogCloseBtn,
  DialogContentStyled,
  DialogStyled,
} from './DialogComponent.styled';

type DialogComponentProps = {
  popUp: React.ReactNode;
  open: boolean;
  onClose(): void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DialogComponent({ popUp, open, onClose }: DialogComponentProps) {
  return (
    <DialogStyled
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogCloseBtn className="btn" onClick={onClose}>
        X
      </DialogCloseBtn>
      <DialogContentStyled>{popUp}</DialogContentStyled>
    </DialogStyled>
  );
}

export default DialogComponent;
