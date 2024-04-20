'use client';

import { VariantProps } from '@/app/(private)/reading/page';
import React from 'react';
import {
  ProgressVariantBntStyled,
  ToggleProgressVariantBoxStyled,
} from './ProgressVariant.styled';

type ToggleProgressVariantProps = {
  variant: string;
  changeVariant(variant: VariantProps): void;
};

function ToggleProgressVariant({
  changeVariant,
  variant,
}: ToggleProgressVariantProps) {
  return (
    <ToggleProgressVariantBoxStyled>
      <ProgressVariantBntStyled
        onClick={() => changeVariant('dairy')}
        className={variant === 'dairy' ? 'btn active' : 'btn'}
      >
        <svg className="icon" width={16} height={16}>
          <use href="/sprite.svg#icon-hourglass"></use>
        </svg>
      </ProgressVariantBntStyled>
      <ProgressVariantBntStyled
        onClick={() => changeVariant('statistics')}
        className={variant === 'statistics' ? 'btn active' : 'btn'}
      >
        <svg className="icon" width={16} height={16}>
          <use href="/sprite.svg#icon-pie-chart"></use>
        </svg>
      </ProgressVariantBntStyled>
    </ToggleProgressVariantBoxStyled>
  );
}

export default ToggleProgressVariant;
