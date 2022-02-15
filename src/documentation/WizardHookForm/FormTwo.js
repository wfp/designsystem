import React from 'react'
import InputGroup from '../../components/InputGroup';
import TextArea from '../../components/TextArea';
import FormGroup from '../../components/FormGroup';
import RadioButton from '../../components/RadioButton/RadioButton';

function FormTwo(props) {
    return (
            <FormGroup>
                <InputGroup
                  labelText="Sex"
                  vertical
                >
                  <RadioButton
                    id="female"
                    {...props.register("sex")}
                    labelText="Female"
                    value="female"
                  />
                  <RadioButton
                    id="male"
                    {...props.register("sex")}
                    labelText="Male"
                    value="male"
                  />
                </InputGroup>
                <FormGroup>
                  <TextArea
                    {...props.register("notes2")}
                    labelText="Notes"
                  />
                </FormGroup>
            </FormGroup>
    )
}

export default FormTwo