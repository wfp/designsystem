import React from 'react';
import styles from './contact.module.scss';
import { Button, FormGroup, TextInput, TextArea } from '@wfp/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';

export default function Contact({ children }: any) {
  return (
    <div className={styles.flex}>
      <FormGroup>
        <TextInput
          labelText="Wie können wir Sie erreichen?"
          helperText="Geben Sie bitte Ihre E-Mailadresse oder Telefonnummer an"
        />
        <TextArea labelText="Text" />
        {children}
        <Button icon={<FontAwesomeIcon icon={faArrowRight} />}>Absenden</Button>
      </FormGroup>
    </div>
  );
}
