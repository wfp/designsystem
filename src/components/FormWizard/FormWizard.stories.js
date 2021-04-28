import React from 'react';
import FormWizard from './FormWizard';
import markdown from './README.mdx';
import formWizardTwig from './FormWizard.twig'

export default {
  title: 'Components/Forms/FormWizard',
  component: FormWizard,
  markdown: 'hello',
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    twig: formWizardTwig
  },
};

export const Default = (args) => (
  <FormWizard {...args} sidebar={<div>The Sidebar content</div>}>
    The Main content
  </FormWizard>
);
Default.args = {
  children: 'FormWizard',
};
