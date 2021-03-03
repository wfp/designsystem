import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import FormGroup from '../../components/FormGroup';
import TextInput from '../../components/TextInput';
import NumberInput from '../../components/NumberInput';
import Button from '../../components/Button';
import ReactSelectWrapper from './ReactSelectWrapper';

const options = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];
const countryOptions = [
    
    { value: 'armenia', label: 'Armenia' },
    { value: 'brazil', label: 'Brazil' },
    { value: 'china', label: 'China' },
    { value: 'france', label: 'France' },
    { value: 'honduras', label: 'Honduras' },
    { value: 'indonesia', label: 'Indonesia' },
    { value: 'morocco', label: 'Morocco' },
    { value: 'pakistan', label: 'Pakistan' },
    { value: 'russia', label: 'Russia' },
    { value: 'zimbabwe', label: 'Zimbabwe' },
    
]

function Form({ onFormChange }) {
    const { handleSubmit, register, reset, control } = useForm();

    const handleFilter = (formdata) => {
        onFormChange(formdata)
    }


    return (
        <form onSubmit={handleSubmit(handleFilter)}>
            <FormGroup className="wfp--form-long"
                align="horizontal"
                style={{ marginTop: '1rem' }}>

                <Controller
                    as={<ReactSelectWrapper control={control} options={options} />}
                    name="gender"
                    labelText="Gender"
                    control={control}
                />

                <Controller
                    as={<ReactSelectWrapper control={control} options={countryOptions} />}
                    name="country"
                    labelText="Country"
                    control={control}
                />

                
            </FormGroup>
            <FormGroup className="wfp--form-long" align="horizontal" style={{ marginTop: '1rem' }}>
                <TextInput
                id="firstname"
                name="firstname"
                labelText="Firstname"
                placeholder="eg: Edith"
                inputRef={register}
                />
                <TextInput
                id="lastname"
                name="lastname"
                labelText="lastname"
                placeholder="eg: Chemin"
                inputRef={register}
                />
                <NumberInput id="age" name="age" labelText="Age" placeholder="" inputRef={register} />
            </FormGroup>

            <div
            className="buttons"
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '2em',
            }}>
            <Button
                type="button"
                kind="ghost"
                style={{ marginRight: '0.5em' }}
                onClick={()=> reset()}>
                Clear filters
            </Button>
            <Button type="submit">Apply</Button>
            </div>
        </form>
    )
}

export default Form
