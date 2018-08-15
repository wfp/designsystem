/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import withTests from '../../internal/withTests';
import FormGroup from '../FormGroup';
import TextInput from '../TextInput';
import SingleComponent from '../../documentation/SingleComponent';

const fieldsetCheckboxProps = {
  className: 'some-class',
  legendText: 'FormGroup heading',
};

const TextInputProps = {
  className: 'some-class',
  id: 'test2',
  labelText: 'Text Input label',
  placeholder: 'Placeholder text',
};

storiesOf('FormGroup', module)
  .addDecorator(withTests('FormGroup'))
  .addDecorator(story => (
    <SingleComponent pageWidth="wide">{story()}</SingleComponent>
  ))
  .addWithInfo(
    'Default',
    `
      Breadcrumb enables users to quickly see their location within a path of navigation and move up to a parent level if desired. It can be used with react-router by placing <NavLink></NavLink> inside <BreadcrumbItem />
    `,
    () => (
      <FormGroup {...fieldsetCheckboxProps}>
        <TextInput {...TextInputProps} />
        <TextInput {...TextInputProps} />
        <TextInput {...TextInputProps} />
      </FormGroup>
    )
  );
