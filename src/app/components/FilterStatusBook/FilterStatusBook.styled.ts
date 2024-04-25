import styled from '@emotion/styled';
import { MenuItem } from '@mui/material';
import { MenuProps as MuiMenuProps } from '@mui/material/Menu';

export const SelectStyled = {
  width: '120px',
  borderRadius: '12px',
  border: '1px solid #3E3E3E',

  fontFamily: 'inherit',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: '1.33',

  color: 'inherit',

  '.MuiSelect-select': {
    padding: '12px 14px',
  },

  '.MuiSelect-icon': {
    stroke: 'var(--primary-color)',
    right: '14px',
  },

  '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
    {
      paddingRight: '0',
    },

  '@media screen and (min-width: 768px)': {
    width: '154px',

    fontSize: '14px',
    lineHeight: '1.28',
    '.MuiSelect-select': {
      padding: '14px',
    },
  },
};

export function MenuPropsStyled(isMobile: boolean): Partial<MuiMenuProps> {
  return {
    PaperProps: {
      style: {
        paddingTop: isMobile ? '4px' : '8px',
        background: 'transparent',
        boxShadow: 'none',
      },
    },
    MenuListProps: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '7px',
        padding: '14px 0 14px 14px',
        background: '#262626',
        borderRadius: '12px',
      },
    },
  };
}

export const SelectItemStyled = styled(MenuItem)`
  min-height: 0;
  padding: 0;

  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  color: #686868;

  &.Mui-selected,
  &.Mui-selected:hover,
  &:is(:hover, :focus) {
    background-color: transparent;
  }

  &.Mui-selected,
  &:is(:hover, :focus) {
    color: var(--primary-color);
  }

  @media only screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;
