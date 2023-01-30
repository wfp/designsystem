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
                    value="female"
                    {...props.register('sex')}
                  />
                  <RadioButton
                    id="male"
                    labelText="Male"
                    value="male"
                    {...props.register('sex')}
                  />
                </InputGroup>
                <FormGroup>
                  <TextArea
                    labelText="Notes"
                    {...props.register('notes2')}
                  />
                </FormGroup>
            </FormGroup>
    )
}

export default FormTwo