"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formErrorResponse = void 0;

var formErrorResponse = function formErrorResponse(errorFields) {
  var errors = {};
  var generic = []; // Remove empty errors

  Object.keys(errorFields).forEach(function (key) {
    if (errorFields[key] === null) {
      delete errorFields[key];
    } else if (key === '_generic') {
      generic = errorFields[key];
      delete errorFields[key];
    }
  });

  if (Object.keys(errorFields).length >= 1 || generic.length >= 1) {
    errors._error = {
      fields: {},
      generic: generic
    };
    errors._error.title = 'Please check your input';
    Object.assign(errors._error.fields, errorFields);
  }

  return Object.assign(errors, errorFields);
};
/*
export const clearField  = (dispatch, form_name, field_name, val='') => {
    dispatch(change(form_name, field_name, val));
    dispatch(untouch(form_name, field_name));
}
*/


exports.formErrorResponse = formErrorResponse;