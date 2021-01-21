import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import FormGroup from '../../components/FormGroup';
import TextInput from '../../components/TextInput';
import NumberInput from '../../components/NumberInput';
import Button from '../../components/Button';
import ReactSelect from 'react-select';

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

function Form() {
    const { handleSubmit, register, errors, control } = useForm();

    const handleFilter = (formdata) => {
        console.log("data: ", formdata);
    }

    return (
        <form onSubmit={handleSubmit(handleFilter)}>
            <FormGroup className="wfp--form-long"
                align="horizontal"
                style={{ marginTop: '1rem' }}>
                <div className="wfp--form-item" style={{ minWidth: '100px' }}>
                <label htmlFor="country" className="wfp--label">
                    Gender
                </label>
                <Controller
                    as={ReactSelect}
                    name="gender"
                    className="wfp--react-select-container"
                    classNamePrefix="wfp--react-select"
                    control={control}
                    onChange={([selected]) => {
                    return { selected };
                    }}
                    options={options}
                    defaultValue={{}}
                />
                {/* <ReactSelect
                    className="wfp--react-select-container"
                    classNamePrefix="wfp--react-select"
                    id="gender"
                    name="gender"
                    options={options}
                    ref={register}
                /> */}
                </div>
                <div className="wfp--form-item" style={{ minWidth: '100px' }}>
                <label htmlFor="city" className="wfp--label">
                    Country
                </label>
                <ReactSelect
                    className="wfp--react-select-container"
                    classNamePrefix="wfp--react-select"
                    id="country"
                    name="country"
                    // onChange={handleCityChange}
                    options={countryOptions}
                    ref={register}
                />
                </div>
                
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
                id="street"
                name="street"
                labelText="Street"
                placeholder="eg: Chemin Aime Steinlein"
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
                style={{ marginRight: '0.5em' }}>
                Clear filters
            </Button>
            <Button type="submit">Apply</Button>
            </div>
        </form>
    )
}

export default Form
