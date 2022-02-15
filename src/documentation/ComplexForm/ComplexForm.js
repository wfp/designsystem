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
  const { control, handleSubmit, register, reset, formState: { errors } } = useForm();
  const onSubmit = (values) => {
    setOutput(values);
  };
  const [output, setOutput] = useState({});

  return (
    <Form longForm onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...register("email", {required:true, pattern:{
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'invalid email address',
        }})}
        labelText="Email TextInput"
        
      />
      {errors.email && <span role="alert"> {errors.username.message} </span>}
      <TextInput
        {...register('textinput',{
          validate: (value) => value !== 'admin' || 'Nice try!',
        })}
        labelText="TextInput"
      />
     
      <NumberInput
        {...register('numberinput')}
        labelText="Number input"
        step={1}
      />

      <Select {...register("select")} labelText="Select">
        <SelectItem value="" text="not selected" />
        <SelectItem value="daily" text="daily" />
        <SelectItem value="weekly" text="weekly" />
        <SelectItem value="monthly" text="monthly" />
      </Select>
      {errors.username && <span role="alert"> {errors.username.message} </span>}
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
