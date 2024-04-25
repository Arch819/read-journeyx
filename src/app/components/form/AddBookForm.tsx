'use client';

import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { number, object, string } from 'yup';
import Input from '../Input';
import SecondaryBtn from '../SecondaryBtn';
import { InputBoxStyled } from '../DashboardForm/DashboardForm.styled';
import { useAppDispatch } from '@/lib/hooks';
import { addBookThunk } from '@/lib/books/booksThunk';
import { togglePopUp } from '@/lib/appState/appStateSlice';

type AddBookFormProps = {};

interface IInitialValues {
  title: string;
  author: string;
  totalPages: number;
}
const initialValues: IInitialValues = {
  title: '',
  author: '',
  totalPages: 0,
};
const validationSchema = object().shape({
  title: string().required(),
  author: string().required(),
  totalPages: number().required().min(1),
});

function AddBookForm({}: AddBookFormProps) {
  const dispatch = useAppDispatch();

  const [isDisabledBtn, setIsDisabledBtn] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addBookThunk(values)).then(
        (r) =>
          r.meta.requestStatus === 'fulfilled' &&
          dispatch(togglePopUp('SuccessAddedBook')),
      );
      resetForm();
      setIsDisabledBtn(true);
      setIsSubmitted(true);
    },
  });

  useEffect(() => {
    if (
      (formik.touched.author ||
        formik.touched.title ||
        formik.touched.totalPages) &&
      !formik.isValidating &&
      !Object.keys(formik.errors).length
    ) {
      setIsDisabledBtn(false);
    }
  }, [
    formik.errors,
    formik.isValidating,
    formik.touched.author,
    formik.touched.title,
    formik.touched.totalPages,
  ]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputBoxStyled>
        <Input
          type="text"
          label="Book title:"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          touched={formik.touched.title}
          isSubmitted={isSubmitted}
          required
        />
        <Input
          type="text"
          label="The author:"
          name="author"
          value={formik.values.author}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.author && Boolean(formik.errors.author)}
          helperText={formik.touched.author && formik.errors.author}
          touched={formik.touched.author}
          isSubmitted={isSubmitted}
          required
        />
        <Input
          type="number"
          label="Number of pages:"
          name="totalPages"
          value={formik.values.totalPages}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.totalPages && Boolean(formik.errors.totalPages)}
          helperText={formik.touched.totalPages && formik.errors.totalPages}
          touched={formik.touched.totalPages}
          isSubmitted={isSubmitted}
          required
        />
      </InputBoxStyled>
      <SecondaryBtn text="Add book" type="submit" disabled={isDisabledBtn} />
    </form>
  );
}

export default AddBookForm;
