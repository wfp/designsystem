import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from '../../components/Select';
import TextInput from '../../components/TextInput';
import NumberInput from '../../components/NumberInput';
import SelectItem from '../../components/SelectItem';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Blockquote from '../../components/Blockquote/Blockquote';

const ComplexForm = () => {
  const { control, handleSubmit, register, errors, reset } = useForm();
  const onSubmit = (values) => {
    setOutput(values);
  };
  const [output, setOutput] = useState({});

  return (
    <Form longForm onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        labelText="Email TextInput"
        name="email"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        })}
      />
      {errors.email && errors.email.message}
      <TextInput
        labelText="TextInput"
        name="textinput"
        ref={register({
          validate: (value) => value !== 'admin' || 'Nice try!',
        })}
      />
      {/*<Checkbox
      onBlur={onBlur}
      onChange={e => onChange(e.target.checked)}
      checked={value}
      name={name}

                 onChange={e => {console.log("waaaaa", e)}}

                  onChange={(e, l) => {
              console.log('wqqqqqqaaa', e, e.target.value, l);
              props.onChange(e.target.value);
            }}

    />*/}
      <Controller
        control={control}
        name="numberinput"
        render={(props) => (
          <NumberInput
            {...props}
            labelText="Number input"
            name="numberinput"
            step="0.1"
          />
        )}
      />
      <Select name="select" inputRef={register} labelText="Select">
        <SelectItem value="" text="not selected" />
        <SelectItem value="daily" text="daily" />
        <SelectItem value="weekly" text="weekly" />
        <SelectItem value="monthly" text="monthly" />
      </Select>
      {errors.username && errors.username.message}
      <Button type="submit">Submit</Button>{' '}
      <Button
        type="submit"
        kind="secondary"
        onClick={() => reset({ numberinput: 3 })}>
        Reset
      </Button>
      <Blockquote title="Output">{JSON.stringify(output)}</Blockquote>
    </Form>
  );
};

export default ComplexForm;
