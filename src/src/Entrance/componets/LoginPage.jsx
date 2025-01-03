import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ErrorDialog from './ErrorDialog';

const LoginPage = ({ onLogin, validationRules }) => {
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validationSchema = Yup.object({
    username: Yup.string()
      .required(validationRules?.username?.requiredMessage || 'Username is required')
      .min(
        validationRules?.username?.minLength || 3,
        validationRules?.username?.minLengthMessage || 'Username must be at least 3 characters'
      ),
    password: Yup.string()
      .required(validationRules?.password?.requiredMessage || 'Password is required')
      .min(
        validationRules?.password?.minLength || 6,
        validationRules?.password?.minLengthMessage || 'Password must be at least 6 characters'
      ),
  });

  const handleCloseErrorDialog = () => {
    setErrorDialogOpen(false);
  };

  return (
    <>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          if (values.username === 'admin' && values.password === 'password') {
            onLogin({ username: values.username });
          } else {
            setErrorMessage('Неверный логин или пароль');
            setErrorDialogOpen(true);
          }
          setSubmitting(false);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <div className="login-page">
            <h2>Вход</h2>
            <Form>
              <div>
                <Field
                  type="text"
                  name="username"
                  placeholder="Имя пользователя"
                  className={errors.username && touched.username ? 'error-field' : ''}
                />
                <ErrorMessage name="username" component="div" className="error-message" />
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  className={errors.password && touched.password ? 'error-field' : ''}
                />
                <ErrorMessage name="password" component="div" className="error-message" />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Войти
              </button>
            </Form>
          </div>
        )}
      </Formik>
      <ErrorDialog open={errorDialogOpen} onClose={handleCloseErrorDialog} message={errorMessage} />
    </>
  );
};

export default LoginPage;