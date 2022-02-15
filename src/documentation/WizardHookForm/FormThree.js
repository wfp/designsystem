
import React from 'react'
import TextArea from '../../components/TextArea';

function FormThree(props) {
    return (
        <>
            <TextArea
                labelText="Notes"
                {...props.register("newnotes2")}
              />
              <TextArea
                labelText="Summary"
                {...props.register("summary")}
              />
        </>
    )
}

export default FormThree