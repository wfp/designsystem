import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Form, Field } from 'react-final-form';
import Select from '../Select';
import SelectItem from '../SelectItem';
import ReduxFormWrapper from '../ReduxFormWrapper';
import Button from '../Button';
import Blockquote from '../Blockquote';
import SelectSkeleton from '../Select/Select.Skeleton';

const onSubmit = () => {};

storiesOf('Forms|ReduxFormWrapper', module)
  .addDecorator(withKnobs)
  .add('Select (react-final-form)', () => {
    return (
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className="wfp--form-long">
            <Field
              name="firstName"
              component={ReduxFormWrapper}
              InputComponent={Select}
              type="text"
              labelText="Label"
              placeholder="First Name">
              <SelectItem value="option-1" text="Option 1" />
              <SelectItem value="option-2" text="Option 2" />
            </Field>
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
  })
  .add('skeleton', () => (
    <div style={{ width: '300px' }}>
      <SelectSkeleton />
    </div>
  ));
