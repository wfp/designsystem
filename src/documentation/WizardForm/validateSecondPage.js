import { formErrorResponse } from '../../components/FormError';

const validate = (values, formData) => {
  const errors = {};
  if (formData.registeredFields && formData.registeredFields.email) {
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
  }

  if (Object.keys(errors).length >= 1) {
    errors._error = 'No way';
  }

  return formErrorResponse(errors);
};

export default validate;
