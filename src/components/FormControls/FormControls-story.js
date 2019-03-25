import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, object, text } from '@storybook/addon-knobs';
import { iconArrowLeft, iconArrowRight } from '@wfp/icons';

import FormControls from '../FormControls';

const props = {
  formControls: () => ({
    className: 'some-class',
    onNextClick: action('onNextClick'),
    nextDisabled: boolean('disable Next button (nextDisabled)', false),
    nextIcon: object('custom icon for Next button (nextIcon)', iconArrowRight),
    nextHidden: boolean('hide Next button (nextHidden)', false),
    nextText: text('custom text for Next button (nextText)', undefined),
    onPreviousClick: action('onPreviousClick'),
    previousDisabled: boolean(
      'disable Previous button (previousDisabled)',
      false
    ),
    previousIcon: object(
      'custom icon for Previous button (previousIcon)',
      iconArrowLeft
    ),
    previousHidden: boolean('hide Next button (nextHidden)', false),
    previousText: text('custom text for Next button (nextText)', undefined),
    onSubmitClick: action('onSubmitClick'),
    submitDisabled: boolean('disable Submit button (SubmitDisabled)', false),
    submitIcon: text('optional icon for Next button (nextIcon)', undefined),
    submitHidden: boolean('hide Submit button (submitHidden)', false),
    submitText: text('custom text for Next button (nextText)', undefined),
  }),
  formControlsSimple: () => ({
    className: 'some-class',
    onNextClick: action('onNextClick'),
    nextDisabled: boolean('disable Next button (nextDisabled)', false),
    nextIcon: text('custom icon for Next button (nextIcon)', false),
    nextHidden: boolean('hide Next button (nextHidden)', false),
    nextText: text('custom text for Next button (nextText)', 'Save form'),
    onPreviousClick: action('onPreviousClick'),
    previousDisabled: boolean(
      'disable Previous button (previousDisabled)',
      false
    ),
    previousIcon: text(
      'custom icon for Previous button (previousIcon)',
      'arrow--left'
    ),
    previousHidden: boolean('hide Next button (nextHidden)', true),
    previousText: text('custom text for Next button (nextText)', undefined),
    onSubmitClick: action('onSubmitClick'),
    submitDisabled: boolean('disable Submit button (SubmitDisabled)', false),
    submitIcon: text('optional icon for Next button (nextIcon)', undefined),
    submitHidden: boolean('hide Submit button (submitHidden)', false),
    submitText: text('custom text for Next button (nextText)', undefined),
  }),
};

storiesOf('Components|FormControls', module)
  .addDecorator(withKnobs)

  .add('Default (Wizard form)', () => (
    <FormControls {...props.formControls()} />
  ))
  .add('Simple form', () => <FormControls {...props.formControlsSimple()} />);
