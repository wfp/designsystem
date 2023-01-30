import React from 'react'
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';
import Blockquote from '../../components/Blockquote';

function FormOne(props) {

    return (
        <>
            <div style={{marginBottom:'2rem'}}>
              <Blockquote title="Regular Blockquote">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua.
              </Blockquote>
              </div>
              <TextInput
                id="firstName"
                helperText="Enter your full first name"
                labelText="First Name"
                {...props.register('firstName')}
              />
                {/* <input
                name="firstName"
                ref={register}
                /> */}
              <TextInput
                id="lastName"
                labelText="Last Name"
                helperText="Enter your last name"
                placeholder="Placeholder text"
                {...props.register('lastName')}
              />
              {/* <input
                name="lastName"
                ref={register}
                /> */}
              <TextArea
                labelText="Notes"
                {...props.register('notes')}
              />
        </>
    )
}

export default FormOne