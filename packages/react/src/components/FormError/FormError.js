import PropTypes from 'prop-types';
import React from 'react';
import { settings } from '../../globals/js';
const { prefix } = settings;

import Blockquote from '../Blockquote';

const FormError = ({ className, message, submitFailed }) => {
  if (message && submitFailed === true) {
    return (
      <Blockquote className={className} warning withIcon={false}>
        <h4 className={`${prefix}--form-error__title`}>{message.generic}</h4>

        {message.fields && (
          <ul className={`${prefix}--form-error__list`}>
            {message.fields.map((field, i) => (
              <li key={i}>
                <label htmlFor={field.key}>{field.message}</label>
              </li>
            ))}
          </ul>
        )}
      </Blockquote>
    );
  } else {
    return null;
  }
};

FormError.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  info: PropTypes.string,
};

export default FormError;
