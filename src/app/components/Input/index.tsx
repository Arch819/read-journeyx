import React, { useEffect, useState } from 'react';
import {
  HelperTextStyled,
  InputBoxStyled,
  InputStyled,
  LabelStyled,
  StatusIconBoxStyled,
  StatusIconStyled,
} from './Input.styled';
import sprite from '../../../img/sprite.svg';
import Image from 'next/image';

type InputStatusProps = 'empty' | 'correct' | 'error';

type Props = {
  type: string;
  name: string;
  label: string;
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onBlur(event: React.FocusEvent<HTMLInputElement>): void;
  error: boolean | undefined;
  helperText?: string | false | undefined;
  required: boolean;
  sx?: React.CSSProperties;
  touched?: boolean;
  autoFocus?: boolean;
};

export default function Input(props: Props) {
  const [inputStatus, setInputStatus] = useState<InputStatusProps>('empty');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (props.error) {
      setInputStatus('error');
    }
    if (!props.error && props.value && props.touched) {
      setInputStatus('correct');
    }
  }, [props.error, props.touched, props.value]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <InputBoxStyled style={props.sx} className={inputStatus}>
      <LabelStyled>
        <span className="label-text">{props.label}</span>
        <InputStyled
          type={showPassword ? 'text' : props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          required={props.required}
          autoFocus={props.autoFocus}
        />
        <StatusIconBoxStyled>
          {inputStatus === 'error' && (
            <StatusIconStyled width={18} height={18} className="error">
              <use href={`${sprite}#icon-error`}></use>
            </StatusIconStyled>
          )}
          {inputStatus === 'correct' && (
            <StatusIconStyled width={18} height={18} className="correct">
              <use href={`${sprite}#icon-error`}></use>
            </StatusIconStyled>
          )}
          {props.type === 'password' && (
            <button
              className="btn"
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              type="button"
            >
              {showPassword ? (
                <StatusIconStyled>
                  <use href={`${sprite}#icon-eye-off`}></use>
                </StatusIconStyled>
              ) : (
                <StatusIconStyled>
                  <use href={`${sprite}#icon-eye`}></use>
                </StatusIconStyled>
              )}
            </button>
          )}
        </StatusIconBoxStyled>
      </LabelStyled>
      {props.error && (
        <HelperTextStyled>Enter a valid {props.label}*</HelperTextStyled>
      )}
      {inputStatus === 'correct' && (
        <HelperTextStyled>
          {props.name === 'password' ? 'Password is secure' : 'Correct'}
        </HelperTextStyled>
      )}
    </InputBoxStyled>
  );
}