'use client';

import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import Input from '../Input';
import SecondaryBtn from '../SecondaryBtn';
import { InputBoxStyled } from '../DashboardForm/DashboardForm.styled';

type AddBookFormProps = {};

interface IInitialValues {
  bookTitle: string;
  author: string;
  numberPages: string;
}
const initialValues: IInitialValues = {
  bookTitle: '',
  author: '',
  numberPages: '',
};
const validationSchema = object().shape({
  bookTitle: string().required(),
  author: string().required(),
  numberPages: string().required(),
});

function AddBookForm({}: AddBookFormProps) {
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
    if (
      (formik.touched.author ||
        formik.touched.bookTitle ||
        formik.touched.numberPages) &&
      !formik.isValidating &&
      !Object.keys(formik.errors).length
    ) {
      setIsDisabledBtn(false);
    }
  }, [
    formik.errors,
    formik.isValidating,
    formik.touched.author,
    formik.touched.bookTitle,
    formik.touched.numberPages,
  ]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputBoxStyled>
        <Input
          type="text"
          label="Book title:"
          name="bookTitle"
          value={formik.values.bookTitle}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.bookTitle && Boolean(formik.errors.bookTitle)}
          helperText={formik.touched.bookTitle && formik.errors.bookTitle}
          touched={formik.touched.bookTitle}
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
          type="text"
          label="Number of pages:"
          name="numberPages"
          value={formik.values.numberPages}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.numberPages && Boolean(formik.errors.numberPages)
          }
          helperText={formik.touched.numberPages && formik.errors.numberPages}
          touched={formik.touched.numberPages}
          isSubmitted={isSubmitted}
          required
        />
      </InputBoxStyled>
      <SecondaryBtn text="Add book" disabled={isDisabledBtn} />
    </form>
  );
}

export default AddBookForm;
