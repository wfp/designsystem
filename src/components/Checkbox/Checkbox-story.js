import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import FormGroup from '../FormGroup';
import Checkbox from '../Checkbox';
import CheckboxSkeleton from '../Checkbox/Checkbox.Skeleton';

const props = () => ({
  className: 'some-class',
  labelText: text('Label text (labelText)', 'Checkbox label'),
  indeterminate: boolean('Intermediate (indeterminate)', false),
  disabled: boolean('Disabled (disabled)', false),
  hideLabel: boolean('No label (hideLabel)', false),
  wrapperClassName: text('Wrapper CSS class name (wrapperClassName)', ''),
  onChange: action('onChange'),
});

storiesOf('Components|Checkbox', module)
  .addDecorator(withKnobs)
  .add('checked', () => {
    const checkboxProps = props();
    return (
      <fieldset className="wfp--fieldset">
        <legend className="wfp--label">Checkbox heading</legend>
        <Checkbox defaultChecked {...checkboxProps} id="checkbox-label-1" />
        <Checkbox defaultChecked {...checkboxProps} id="checkbox-label-1" />
      </fieldset>
    );
  })
  .add('unchecked', () => {
    const checkboxProps = props();
    return (
      <fieldset className="wfp--fieldset">
        <legend className="wfp--label">Checkbox heading</legend>
        <Checkbox {...checkboxProps} id="checkbox-label-1" />
        <Checkbox {...checkboxProps} id="checkbox-label-2" />
      </fieldset>
    );
  })
  .add('inline', () => {
    const checkboxProps = props();
    return (
      <FormGroup>
        <legend className="wfp--label">Checkbox heading</legend>
        <div className="wfp--fieldset__inline">
          <Checkbox {...checkboxProps} id="checkbox-label-1" />
          <Checkbox {...checkboxProps} id="checkbox-label-2" />
        </div>
      </FormGroup>
    );
  })
  .add('skeleton', () => (
    <div>
      <CheckboxSkeleton />
    </div>
  ));
