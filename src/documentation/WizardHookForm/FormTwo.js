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
                  name="input-group"
                  vertical
                >
                  <RadioButton
                    id="female"
                    labelText="Female"
                    name="sex"
                    value="female"
                    inputRef={props.register}
                  />
                  <RadioButton
                    id="male"
                    labelText="Male"
                    name="sex"
                    value="male"
                    inputRef={props.register}
                  />
                </InputGroup>
                <FormGroup>
                  <TextArea
                    labelText="Notes"
                    name="notes2"
                    inputRef={props.register}
                  />
                </FormGroup>
            </FormGroup>
    )
}

export default FormTwo
