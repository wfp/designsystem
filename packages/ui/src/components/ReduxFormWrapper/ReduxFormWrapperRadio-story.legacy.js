import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Form, Field } from 'react-final-form';
import RadioButton from '../RadioButton';
import ReduxFormWrapper from '../ReduxFormWrapper';
import Button from '../Button';
import Blockquote from '../Blockquote';

const onSubmit = () => {};

storiesOf('Components|ReduxFormWrapper', module)
  .addDecorator(withKnobs)
  .add('RadioButton (react-final-form)', () => {
    return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className="wfp--form-long">
            <Field
              component={ReduxFormWrapper}
              InputComponent={RadioButton}
              id="radio-1"
              name="mode"
              value="select 1"
              labelText="select 1"
              type="radio"
            />

            <Field
              component={ReduxFormWrapper}
              InputComponent={RadioButton}
              id="radio-2"
              name="mode"
              value="select 2"
              labelText="select 2"
              type="radio"
            />

            <div className="buttons">
              <Button type="submit" disabled={submitting || pristine}>
                Submit
              </Button>{' '}
              <Button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}>
                Reset
              </Button>
            </div>
            <Blockquote code>{JSON.stringify(values, 0, 2)}</Blockquote>
          </form>
        )}
      />
    );
  });
