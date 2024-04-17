'use client';

import React, { useEffect, useState } from 'react';
import { Formik, FormikHelpers, useFormik } from 'formik';
import { object, string } from 'yup';
import Input from '../Input';
import {
  FormActionSubmitBtnStyled,
  FormActionLinkStyled,
  FormStyled,
  FormTitleStyled,
  InputBoxStyled,
  FormActionBoxStyled,
} from './SignInUp.styled';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

type SignFormProps = {
  event: 'signIn' | 'signUp';
};

const validationSignInSchema = object().shape({
  email: string()
    .email()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    .required(),
  password: string().min(7).required(),
});
const validationSchema = object().shape({
  name: string().required(),
  email: string()
    .email()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
    .required(),
  password: string().min(7).required(),
});

const initialValues: FormValues = {
  name: '',
  email: '',
  password: '',
};

export default function SignForm(props: SignFormProps) {
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);

  const formik = useFormik<FormValues>({
    initialValues,
    validationSchema:
      props.event === 'signIn' ? validationSignInSchema : validationSchema,
    onSubmit: (values, { resetForm }: FormikHelpers<FormValues>) => {
      console.log(values);
      resetForm();
      setIsDisabledBtn(true);
    },
  });

  useEffect(() => {
    if (
      (formik.touched.email ||
        formik.touched.name ||
        formik.touched.password) &&
      !formik.isValidating &&
      !Object.keys(formik.errors).length
    ) {
      setIsDisabledBtn(false);
    }
  }, [
    formik.errors,
    formik.isValidating,
    formik.touched.email,
    formik.touched.name,
    formik.touched.password,
  ]);

  return (
    <>
      <FormTitleStyled>
        Expand your mind, reading <span className="second">a book</span>
      </FormTitleStyled>
      <FormStyled onSubmit={formik.handleSubmit} autoFocus={true}>
        <InputBoxStyled>
          {props.event === 'signUp' && (
            <Input
              type="text"
              name="name"
              label="Name:"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              touched={formik.touched.name}
              autoFocus
              required
            />
          )}
          <Input
            type="email"
            name="email"
            label="Mail:"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            touched={formik.touched.email}
            autoFocus
            required
          />
          <Input
            type="password"
            name="password"
            label="Password:"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            touched={formik.touched.password}
            required
          />
        </InputBoxStyled>
        <FormActionBoxStyled>
          {props.event === 'signIn' ? (
            <>
              <FormActionSubmitBtnStyled
                type="submit"
                className="sign-in"
                disabled={isDisabledBtn}
              >
                Log In
              </FormActionSubmitBtnStyled>
              <FormActionLinkStyled href="/sign-up">
                Don’t have an account?
              </FormActionLinkStyled>
            </>
          ) : (
            <>
              <FormActionSubmitBtnStyled type="submit" disabled={isDisabledBtn}>
                Registration
              </FormActionSubmitBtnStyled>
              <FormActionLinkStyled href="/sign-in">
                Already have an account?
              </FormActionLinkStyled>
            </>
          )}
        </FormActionBoxStyled>
      </FormStyled>
    </>
  );
}
