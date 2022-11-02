import React from 'react';
import type { PropsWithChildren } from 'react';
import classNames, { Argument } from 'classnames';
import { Module, ModuleBody, ModuleHeader, ModuleFooter } from '../Module';
import useSettings from '../../hooks/useSettings';

type FormWizardProps = PropsWithChildren<{
  sidebar: React.ReactNode;
  stickySidebar?: boolean;
  formHeader?: React.ReactNode;
  formControls?: React.ReactNode;
  className?: Argument;
}>;
/** The FormWizard is a wrapper for creating Wizard forms. */

const FormWizard: React.FC<FormWizardProps> = ({
  className,
  children,
  formHeader,
  formControls,
  sidebar,
  stickySidebar,
}) => {
  const { prefix } = useSettings();

  const classes = {
    formControls: classNames(
      `${prefix}--form-wizard`,
      { [`${prefix}--form-wizard--sticky`]: stickySidebar },
      className
    ),
  };

  return (
    <div className={classes.formControls}>
      <div className={`${prefix}--form-wizard__sidebar`}>{sidebar}</div>
      <Module className={`${prefix}--form-wizard__content`} noMargin>
        {formHeader && <ModuleHeader>{formHeader}</ModuleHeader>}
        <ModuleBody>{children}</ModuleBody>
        {formControls && <ModuleFooter>{formControls}</ModuleFooter>}
      </Module>
    </div>
  );
};

export default FormWizard;
