import React, { CSSProperties } from 'react';
import { BtnStyled } from './SecondaryBtn.styled';

type SecondaryBtnProps = {
  text: string;
  disabled?: boolean;
  onClick?(): void;
  style?: CSSProperties;
};

function SecondaryBtn({ text, disabled, onClick, style }: SecondaryBtnProps) {
  return (
    <BtnStyled disabled={disabled} onClick={onClick} style={style}>
      {text}
    </BtnStyled>
  );
}

export default SecondaryBtn;
