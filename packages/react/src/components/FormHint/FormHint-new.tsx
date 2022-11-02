import React from 'react';
import { InfoSolid } from '@un/icons-react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import useSettings from '../../hooks/useSettings';
import Tooltip from '../Tooltip/Tooltip';

/** FormHint allows you to add a longer explanation to an input element. */
type FormHintProps = PropsWithChildren<{
  className?: Argument;
  description?: string;
}>;

const FormHint: React.FC<FormHintProps> = ({
  className,
  children,
  description,
  ...other
}) => {
  const { prefix } = useSettings();

  const formHintClasses = classNames(`${prefix}--form-hint`, className);
  return (
    <Tooltip content={children}>
      <div className={formHintClasses}>
        <InfoSolid width="15" height="15" description={description} />
      </div>
    </Tooltip>
  );
};

export default FormHint;
