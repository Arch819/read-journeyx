'use client';

import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import Input from '../Input';
import SecondaryBtn from '../SecondaryBtn';
import { InputBoxStyled } from '../DashboardForm/DashboardForm.styled';

type FilterProps = {};

interface IInitialValues {
  bookTitle: string;
  author: string;
}
const initialValues: IInitialValues = {
  bookTitle: '',
  author: '',
};

const validationSchema = object().shape({
  bookTitle: string(),
  author: string(),
});

function Filter({}: FilterProps) {
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      setIsDisabledBtn(true);
      setIsSubmitted(true);
    },
  });

  useEffect(() => {
    if (formik.values.author || formik.values.bookTitle) {
      setIsDisabledBtn(false);
    }
  }, [formik.values.author, formik.values.bookTitle]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputBoxStyled>
        <Input
          type="text"
          name="bookTitle"
          label="Book title:"
          value={formik.values.bookTitle}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isSubmitted={isSubmitted}
        />
        <Input
          type="text"
          name="author"
          label="The author:"
          value={formik.values.author}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isSubmitted={isSubmitted}
        />
      </InputBoxStyled>
      <SecondaryBtn text="To apply" disabled={isDisabledBtn} />
    </form>
  );
}

export default Filter;
