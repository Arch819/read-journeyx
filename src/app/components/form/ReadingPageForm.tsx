'use client';

import { useFormik } from 'formik';
import React, { useState } from 'react';
import { number, object } from 'yup';
import Input from '../Input';
import SecondaryBtn from '../SecondaryBtn';

type ReadingPageFormProps = {
  statusReading: boolean;
  changeStatus(): void;
};

interface IInitialValues {
  pageNumber: number;
}

const initialValues: IInitialValues = {
  pageNumber: 0,
};

const validationSchema = object().shape({
  pageNumber: number().required(),
});

function ReadingPageForm({
  statusReading,
  changeStatus,
}: ReadingPageFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
      setIsSubmitted(true);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        name="pageNumber"
        label="Page number:"
        type="number"
        value={formik.values.pageNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.pageNumber && Boolean(formik.errors.pageNumber)}
        helperText={formik.touched.pageNumber && formik.errors.pageNumber}
        touched={formik.touched.pageNumber}
        isSubmitted={isSubmitted}
        required
      />

      <SecondaryBtn
        text={statusReading ? 'To stop' : 'To start'}
        onClick={changeStatus}
        style={{ marginTop: '20px' }}
      />
    </form>
  );
}

export default ReadingPageForm;
