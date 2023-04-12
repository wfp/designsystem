import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, TextInput } from '../src';

const reactHookFormDecorator = (Story) => {
  const [defaultValues, setDefaultValues] = useState({ inputname: true });
  const { control, register, handleSubmit, watch, reset } = useForm({
    defaultValues,
  });
  const [data, setData] = useState('');

  const setDefaultValuesFunc = (e) => {
    console.log(e.target.value);
    try {
      const values = JSON.parse(e.target.value);
      setDefaultValues(values);
    } catch (e) {
      console.log(e);
    }
  };

  const resetInputs = () => {
    reset(defaultValues);
  };
  const currentValues = watch();

  return (
    <>
      <TextInput
        name="default values"
        labelText="Default values"
        defaultValue={JSON.stringify(defaultValues)}
        onChange={setDefaultValuesFunc}
      />
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <Story />
        <Button type="submit">Submit</Button>{' '}
        <Button onClick={resetInputs} kind="tertiary">
          Reset
        </Button>
        <h4>Submitted form data</h4>
        <p>{data}</p>
        <h4>Current values</h4>
        <p>{JSON.stringify(currentValues)}</p>
      </form>
    </>
  );
};

export default reactHookFormDecorator;
