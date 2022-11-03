import React, { PropsWithChildren } from 'react';
import useSettings from '../../hooks/useSettings';

import Blockquote from '../Blockquote';

interface MessageProps {
  generic: string;
  fields: [{ key: string; message: string }];
}

interface FormErrorProps {
  className?: string;
  info?: string;
  submitFailed?: boolean;
  message?: MessageProps;
}

const FormError: React.FC<PropsWithChildren<FormErrorProps>> = ({
  className,
  message,
  submitFailed,
}) => {
  const { prefix } = useSettings();

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

export default FormError;
