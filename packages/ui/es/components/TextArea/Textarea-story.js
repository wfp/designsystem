import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import TextArea from '../TextArea';
import TextAreaSkeleton from '../TextArea/TextArea.Skeleton';

var TextAreaProps = function TextAreaProps() {
  return {
    className: 'some-class',
    disabled: boolean('Disabled (disabled)', false),
    readOnly: boolean('Read-only (readOnly)', false),
    light: boolean('Light variant (light)', false),
    hideLabel: boolean('No label (hideLabel)', false),
    labelText: text('Label text (labelText)', 'Text Area label'),
    invalid: boolean('Show form validation UI (invalid)', false),
    invalidText: text('Content of form validation UI (invalidText)', 'A valid value is required'),
    helperText: text('Helper text (helperText)', 'Optional helper text.'),
    placeholder: text('Placeholder text (placeholder)', 'Placeholder text.'),
    id: 'test2',
    cols: number('Columns (columns)', 50),
    rows: number('Rows (rows)', 4),
    onChange: action('onChange'),
    onClick: action('onClick')
  };
};

storiesOf('Components|TextArea', module).addDecorator(withKnobs).add('Default', function () {
  return /*#__PURE__*/React.createElement(TextArea, TextAreaProps());
}).add('skeleton', function () {
  return /*#__PURE__*/React.createElement(TextAreaSkeleton, null);
});