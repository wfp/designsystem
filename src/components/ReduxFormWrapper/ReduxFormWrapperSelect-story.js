import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { Form, Field } from 'react-final-form';
import Select from '../Select';
import SelectItem from '../SelectItem';
import ReduxFormWrapper from '../ReduxFormWrapper';
import Button from '../Button';
import Blockquote from '../Blockquote';
import SelectSkeleton from '../Select/Select.Skeleton';

const onSubmit = () => {};

storiesOf('ReduxFormWrapper', module)
  .addDecorator(withKnobs)
  .add(
    'Select (react-final-form)',
    withInfo({
      text: `
        Select displays a list below its title when selected. They are used primarily in forms,
        where a user chooses one option from a list. Once the user selects an item, the dropdown will
        disappear and the field will reflect the user's choice. Create Select Item components for each
        option in the list. The example below shows an enabled Select component with three items.
      `,
    })(() => {
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
  )
  .add(
    'skeleton',
    withInfo({
      text: `
        Placeholder skeleton state to use when content is loading.
      `,
    })(() => (
      <div style={{ width: '300px' }}>
        <SelectSkeleton />
      </div>
    ))
  );
