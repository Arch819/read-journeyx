import React, { useState } from 'react';
import { Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import BookIsRead from '../PopUp/BookIsRead';
import DetailBook from '../PopUp/DetailBook';
import SuccessAddedBook from '../PopUp/SuccessAddedBook';
import {
  DialogCloseBtn,
  DialogContentStyled,
  DialogStyled,
} from './DialogComponent.styled';
import { RenderPopUpProps } from '@/lib/appState/initialState';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { togglePopUp } from '@/lib/appState/appStateSlice';
import { selectPopUp } from '@/lib/appState/appStateSelectors';

type DialogComponentProps = {
  children?: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function renderPopUp(popUp: RenderPopUpProps) {
  switch (popUp) {
    case 'BookIsRead':
      return <BookIsRead />;
    case 'SuccessAddedBook':
      return <SuccessAddedBook />;
  }
}

function DialogComponent({ children, open, onClose }: DialogComponentProps) {
  const dispatch = useAppDispatch();
  const popUpSuccess = useAppSelector(selectPopUp);
  console.log(popUpSuccess);

  function handleClose() {
    children ? onClose : dispatch(togglePopUp(null));
  }

  return (
    <DialogStyled
      open={open || Boolean(popUpSuccess)}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogCloseBtn className="btn" onClick={handleClose}>
        <svg width={22} height={22}>
          <use href="/sprite.svg#icon-x"></use>
        </svg>
      </DialogCloseBtn>
      <DialogContentStyled>
        {children || renderPopUp(popUpSuccess)}
      </DialogContentStyled>
    </DialogStyled>
  );
}

export default DialogComponent;
