export var validateEmail = function validateEmail(email) {
  if (!email) {
    return 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return 'Invalid email address';
  } else {
    return null;
  }
};
export var isRequired = function isRequired(field) {
  if (!field) {
    return 'Required';
  } else {
    return null;
  }
};
export var arrayIsRequired = function arrayIsRequired(field) {
  if (!field) {
    return 'Required';
  } else if (field.length === 0) {
    return 'Required';
  } else {
    return null;
  }
};
export var validateDateRange = function validateDateRange(from, to) {
  if (from && !to || !from && to || from > to) {
    return 'Enter valid range';
  } else {
    return null;
  }
};