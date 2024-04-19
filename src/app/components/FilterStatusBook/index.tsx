'use client';

import { Select, SelectChangeEvent, colors } from '@mui/material';
import React, { useState } from 'react';
import {
  MenuPropsStyled,
  SelectItemStyled,
  SelectStyled,
} from './FilterStatusBook.styled';

interface IStatusBook {
  value: string;
  label: string;
}

const statusBook: IStatusBook[] = [
  { value: 'unread', label: 'Unread' },
  { value: 'inProgress', label: 'In progress' },
  { value: 'done', label: 'Done' },
  { value: 'all', label: 'All books' },
];
type FilterStatusBookProps = {};

const ChevronDownIcon = (props: any) => (
  <svg width={20} height={20} {...props}>
    <use href="/sprite.svg#icon-chevron-down"></use>
  </svg>
);

function FilterStatusBook({}: FilterStatusBookProps) {
  const [filterStatusBook, setFilterStatusBook] = useState('all');

  const isMobile = true;

  const handleChange = (event: SelectChangeEvent) => {
    setFilterStatusBook(event.target.value as string);
  };
  return (
    <div>
      <Select
        value={filterStatusBook}
        onChange={handleChange}
        sx={SelectStyled}
        MenuProps={MenuPropsStyled(isMobile)}
        IconComponent={(props) => <ChevronDownIcon {...props} />}
      >
        {statusBook.map((opt) => (
          <SelectItemStyled key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItemStyled>
        ))}
      </Select>
    </div>
  );
}

export default FilterStatusBook;
