import React from 'react';
import { Field, Form } from 'react-final-form';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { SingleDatePickerInput } from '@unitednations/ui';

// const FieldWrapper = styled.div`
//   .datepicker-invalid .DateInput_input {
//     border-color: #c5192d;
//   }
// `;

const DatePickerField = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };
  return (
    <>
      <h1>React Final Form - Simple Example</h1>
      <a
        href="https://final-form.org/react"
        target="_blank"
        rel="noopener noreferrer">
        Read Docs
      </a>
      <Form
        onSubmit={onSubmit}
        initialValues={{ stooge: 'larry', employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label>Date</label>
              <Field name="Single Date" />
              {({ input, meta }) => (
                <div>
                  <SingleDatePickerInput
                    datePicker={SingleDatePicker}
                    invalid={!!(meta.touched && meta.error)}
                    invalidText={meta.error}
                    labelText="labelText"
                    showDefaultInputIcon
                    inputIconPosition="after"
                    isOutsideRange={() => false}
                    displayFormat="DD/MM/YYYY"
                    {...input}
                    date={input.value}
                  />
                  {/* {meta.touched && meta.error && <span>{meta.error}</span>} */}
                </div>
              )}
              <Field name="phone">
                {({ input, meta }) => (
                  <div>
                    <label>Phone</label>
                    <input type="text" {...input} placeholder="Phone" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}>
                Reset
              </button>
            </div>
          </form>
        )}
      />
    </>
  );
};

export default DatePickerField;
