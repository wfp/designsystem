const validate = (values, formData, page) => {
  const errors = {};
  if (page === 0 || page === undefined) {
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
  }
  if (page === 1 || page === undefined) {
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
  }
  return errors;
};

export default validate;
