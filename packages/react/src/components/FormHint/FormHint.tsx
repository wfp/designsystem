import * as React from 'react';
import { InfoSolid } from '@wfp/icons-react';
import type { PropsWithChildren } from 'react';
import classNames from 'classnames';
import useSettings from '../../hooks/useSettings';
import Tooltip from '../Tooltip/Tooltip';

/** FormHint allows you to add a longer explanation to an input element. */
type FormHintProps = PropsWithChildren<{
  className?: string;
  description?: string;
}>;

const FormHint: React.FC<FormHintProps> = ({
  className,
  children,
  description,
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
