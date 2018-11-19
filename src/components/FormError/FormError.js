import PropTypes from 'prop-types';
import React from 'react';

const FormError = ({ className, message, submitFailed }) => {
  console.log("message", message);

  if (message && submitFailed === true) {
    return (
      <div className='wfp__form-error'>
        <h4 className='wfp__form-error__title'>{message.generic}</h4>
        {message.generic && (
          <ul className="wfp__form-error__list">
            { message.generic.map((field, i) => <li key={i}><label>{field}</label></li>) }
          </ul>
        )}
        
        {message.fields && (
          <ul className="wfp__form-error__list">
            { Object.keys(message.fields).map((field, i) => <li key={i}><label htmlFor={field}>{message.fields[field]}</label></li>) }
          </ul>
        )}
        
      </div>);
  }
  else {
    return (null);
  }
};

FormError.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  info: PropTypes.string,
};

export default FormError;
