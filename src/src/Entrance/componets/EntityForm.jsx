import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EntityForm = ({ onAddEntity, validationRules }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required(validationRules?.name?.requiredMessage || 'Name is required')
      .min(
        validationRules?.name?.minLength || 3,
        validationRules?.name?.minLengthMessage || 'Name must be at least 3 characters'
      ),
    description: Yup.string()
      .required(validationRules?.description?.requiredMessage || 'Description is required')
      .min(
        validationRules?.description?.minLength || 10,
        validationRules?.description?.minLengthMessage || 'Description must be at least 10 characters'
      ),
  });

  return (
    <Formik
      initialValues={{ name: '', description: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddEntity(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="entity-form">
          <div>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={errors.name && touched.name ? 'error-field' : ''}
            />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div>
            <Field
              as="textarea"
              name="description"
              placeholder="Description"
              className={errors.description && touched.description ? 'error-field' : ''}
            />
            <ErrorMessage name="description" component="div" className="error-message" />
          </div>
          <button type="submit">Add Entity</button>
        </Form>
      )}
    </Formik>
  );
};

export default EntityForm;