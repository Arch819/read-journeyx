'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import Input from '../Input';
import SecondaryBtn from '../SecondaryBtn';
import { changeFilter } from '@/lib/books/booksSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { selectFilter } from '@/lib/books/booksSelectors';
import { InputBoxStyled } from '../DashboardForm/DashboardForm.styled';

type FilterProps = {};

const validationSchema = object().shape({
  bookTitle: string(),
  author: string(),
});

function Filter({}: FilterProps) {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);

  const [initialValues, setInitialValues] = useState(filter);
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(changeFilter(values));
      setIsDisabledBtn(true);
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInitialValues((prev) => ({ ...prev, [name]: value }));
    formik.handleChange(e);
  };

  useEffect(() => {
    if (formik.values.author || formik.values.title) {
      setIsDisabledBtn(false);
    }
  }, [formik.values.author, formik.values.title]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputBoxStyled>
        <Input
          type="text"
          name="title"
          label="Book title:"
          value={formik.values.title}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          type="text"
          name="author"
          label="The author:"
          value={formik.values.author}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
      </InputBoxStyled>
      <SecondaryBtn text="To apply" type="submit" disabled={isDisabledBtn} />
    </form>
  );
}

export default Filter;
