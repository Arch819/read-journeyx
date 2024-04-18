import styled from '@emotion/styled';
import Image from 'next/image';

export const InputBoxStyled = styled.div`
  position: relative;
`;

export const LabelStyled = styled.label`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding-left: 14px;
  padding-right: 16px;
  margin-bottom: 4px;
  border-radius: 12px;
  background-color: #262626;
  border: 1px solid transparent;
  white-space: nowrap;

  &:is(:hover, :focus),
  &:focus-within {
    border-color: #f9f9f91a;
  }
  .error &,
  .error &:is(:hover, :focus) {
    border-color: #e90516;
  }
  .correct &,
  .correct &:is(:hover, :focus) {
    border-color: #30b94d;
  }

  .label-text {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.3;
    color: #686868;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;

    .label-text {
      font-size: 14px;
    }
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: transparent;
  border: none;
  outline: none;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  color: var(--primary-color);
  @media screen and (min-width: 768px) {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 18px;
    font-size: 14px;
  }
`;

export const StatusIconBoxStyled = styled.div`
  width: 18px;
  height: 18px;
`;

export const StatusIconStyled = styled.svg`
  width: 18px;
  height: 18px;
  &.error {
    background-color: #e90516;
  }
  &.correct {
    background-color: #30b94d;
  }
`;

export const HelperTextStyled = styled.p`
  margin-left: 14px;

  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;

  div.correct & {
    color: #30b94d;
  }
  div.error & {
    color: #e90516;
  }

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;
