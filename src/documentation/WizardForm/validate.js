import {formErrorResponse, isRequired} from '../../components/FormError';

const validate = (values, formData, page) => {
  console.log("Values", formData, values, page);
  const errors = {};
  //errors.firstName = isRequired(values.firstName);
  //errors.email = isRequired(values.email);
  //registeredFields
  
  if (page === 0 || page === undefined) {
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
  }
  if (page === 1 || page === undefined) {
    //if (formData.registeredFields && formData.registeredFields.email) {
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
    //}
  }

  /*
  if (!values.sex) {
    errors.sex = 'Required';
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = 'Required';
  }*/

  /* if (Object.keys(errors).length >= 1) {
    errors._error = "No way";
  } */

  //console.log("errors" ,errors, Object.keys(errors).length);
  return errors;
  //return formErrorResponse(errors);
};

export default validate;
