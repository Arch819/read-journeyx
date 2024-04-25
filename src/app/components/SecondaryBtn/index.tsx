import React, { CSSProperties } from 'react';
import { BtnStyled } from './SecondaryBtn.styled';

type SecondaryBtnProps = {
  text: string;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  onClick?(): void;
  style?: CSSProperties;
};

function SecondaryBtn({
  text,
  disabled,
  onClick,
  style,
  type,
}: SecondaryBtnProps) {
  return (
    <BtnStyled disabled={disabled} onClick={onClick} style={style} type={type}>
      {text}
    </BtnStyled>
  );
}

export default SecondaryBtn;
