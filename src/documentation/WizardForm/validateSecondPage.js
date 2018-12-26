import { formErrorResponse, isRequired } from '../../components/FormError';

const validate = (values, formData) => {
  console.log('Values', formData, values);
  const errors = {};
  //errors.firstName = isRequired(values.firstName);
  //errors.email = isRequired(values.email);
  //registeredFields

  if (formData.registeredFields && formData.registeredFields.email) {
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
  }

  /*
  if (!values.sex) {
    errors.sex = 'Required';
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = 'Required';
  }*/

  if (Object.keys(errors).length >= 1) {
    errors._error = 'No way';
  }

  console.log('errors', errors, Object.keys(errors).length);
  return formErrorResponse(errors);
};

export default validate;
