import React from 'react'
import TextArea from '../../components/TextArea';

function FormThree(props) {
    return (
        <>
            <TextArea
                labelText="Notes"
                name="newnotes2"
                inputRef={props.register}
              />
              <TextArea
                labelText="Summary"
                name="summary"
                inputRef={props.register}
              />
        </>
    )
}

export default FormThree
