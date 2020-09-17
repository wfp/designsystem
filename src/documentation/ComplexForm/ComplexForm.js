import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Link from '../../components/Link';
import Page from '../Page';
import { useForm } from 'react-hook-form';
import Select from '../../components/Select';
import TextInput from '../../components/TextInput';
import SelectItem from '../../components/SelectItem';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Blockquote from '../../components/Blockquote/Blockquote';

const ComplexForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    console.log(values);
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
        name="username"
        ref={register({
          validate: (value) => value !== 'admin' || 'Nice try!',
        })}
      />

      <Select name="repeat" inputRef={register} labelText="Select">
        <SelectItem value="" text="not selected" />
        <SelectItem value="daily" text="daily" />
        <SelectItem value="weekly" text="weekly" />
        <SelectItem value="monthly" text="monthly" />
      </Select>

      {errors.username && errors.username.message}

      <Button type="submit">Submit</Button>

      <Blockquote title="Output">{JSON.stringify(output)}</Blockquote>
    </Form>
  );
};

export default ComplexForm;
