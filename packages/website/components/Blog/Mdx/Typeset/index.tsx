import React, { useState } from 'react';
import { InputGroup, List, ListItem, RadioButton, Text } from '@wfp/react';

import tokens from '@un/themes-core/dist/json/variables-full.json';

import styles from './typeset.module.scss';

// extended logo versions are removed from documentation based on recommendations from CAM, but they still exist in assets for developers already using them in their code.
export default function Typeset() {
  const [breakpoint, setBreakpoint] = useState(false);

  const setBreakpointValue = (e) => {
    setBreakpoint(e.target.value);
  };

  const typesetList = Object.entries(tokens.typography).map(([i, entry]) => {
    return (
      <div key={i} className={styles.typesetListItem}>
        <div className={styles.description}>
          <Text kind="h5" spacingTop="none">
            {i}
          </Text>
          <List small colon kind="simple">
            {/*<ListItem title="font-size"> {entry.fontSize?.value}</ListItem>
            <ListItem title="font-weight"> {entry.fontWeight?.value}</ListItem>
    <ListItem title="line-height"> {entry.lineHeight?.value}</ListItem>*/}

            {Object.entries(entry).map(([iKey, token]: any) => {
              if (iKey === 'md') {
                return (
                  <ListItem key={iKey}>
                    <h4>Breakpoint medium</h4>
                    {Object.entries(token).map(
                      ([iKeyBreakpoint, tokenBreakpoint]: any) => (
                        <ListItem key={iKeyBreakpoint} title={iKeyBreakpoint}>
                          {tokenBreakpoint.value}{' '}
                          {tokenBreakpoint.value !==
                            tokenBreakpoint.original?.value && (
                            <>
                              (
                              {tokenBreakpoint.original.value
                                .replace('{', '')
                                .replace('}', '')}
                              )
                            </>
                          )}
                        </ListItem>
                      )
                    )}
                  </ListItem>
                );
              }

              return (
                <ListItem key={iKey} title={iKey}>
                  {token.value}{' '}
                  {token.value !== token.original?.value && (
                    <>
                      ({token.original.value.replace('{', '').replace('}', '')})
                    </>
                  )}
                </ListItem>
              );
            })}
          </List>
        </div>
        <div>
          <Text kind={i}>{breakpoint} Example text</Text>
        </div>
      </div>
    );
  });
  return (
    <div>
      <InputGroup name="input-group" helperText="Select breakpoint">
        <RadioButton
          name="radiob"
          value="standard"
          id="mobile"
          labelText="Mobile"
          defaultChecked
          onChange={setBreakpointValue}
        />
        <RadioButton
          name="radiob"
          value="tablet"
          id="tablet"
          labelText="Tablet"
          onChange={setBreakpointValue}
        />
        <RadioButton
          name="radiob"
          value="desktop"
          id="desktop"
          labelText="Desktop"
          onChange={setBreakpointValue}
        />
      </InputGroup>
      {typesetList}
    </div>
  );
}
