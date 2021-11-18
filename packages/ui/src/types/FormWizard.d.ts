import * as React from 'react';

declare namespace FormWizard  {
  interface FormWizardProps extends React.HTMLProps<FormWizard> {
    children: React.ReactNode
    sidebar: React.ReactNode
    stickySidebar?: boolean
    formHeader?: React.ReactNode
    formControls?: React.ReactNode
  }
}

declare class FormWizard extends React.Component<FormWizard.FormWizardProps>{ }
export = FormWizard