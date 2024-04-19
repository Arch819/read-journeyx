import { FormikValues, useFormik } from 'formik';
import React, { useState } from 'react';

type FormControllerProps = {
  children: React.ReactNode;
  initialValues: FormikValues;
  validationSchema: any;
};

function FormController({
  children,
  initialValues,
  validationSchema,
}: FormControllerProps) {
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
  return <form onSubmit={formik.handleSubmit}>{children}</form>;
}

export default FormController;
