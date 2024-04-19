import React from 'react';
import { BtnStyled } from './SecondaryBtn.styled';

type SecondaryBtnProps = {
  text: string;
  disabled?: boolean;
};

function SecondaryBtn({ text, disabled }: SecondaryBtnProps) {
  return <BtnStyled disabled={disabled}>{text}</BtnStyled>;
}

export default SecondaryBtn;
