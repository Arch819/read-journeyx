'use client';

import { Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';
import {
  MenuPropsStyled,
  SelectItemStyled,
  SelectStyled,
} from './FilterStatusBook.styled';
import { useAppDispatch } from '@/lib/hooks';
import { changeFilter } from '@/lib/books/booksSlice';

type StatusBookProps = 'unread' | 'in-progress' | 'done' | 'all';
interface IStatusBook {
  value: StatusBookProps;
  label: string;
}
type FilterStatusBookProps = {};

const statusBook: IStatusBook[] = [
  { value: 'unread', label: 'Unread' },
  { value: 'in-progress', label: 'In progress' },
  { value: 'done', label: 'Done' },
  { value: 'all', label: 'All books' },
];

const ChevronDownIcon = (props: any) => (
  <svg width={20} height={20} {...props}>
    <use href="/sprite.svg#icon-chevron-down"></use>
  </svg>
);

function FilterStatusBook({}: FilterStatusBookProps) {
  const dispatch = useAppDispatch();
  const [filterStatusBook, setFilterStatusBook] =
    useState<StatusBookProps>('all');

  const isMobile = true;

  const handleChange = (event: SelectChangeEvent) => {
    setFilterStatusBook(event.target.value as StatusBookProps);
    dispatch(changeFilter({ status: filterStatusBook }));
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
