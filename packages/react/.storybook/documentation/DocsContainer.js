import React from 'react';
import { Title, DocsContainer } from '@storybook/addon-docs';
import { themes } from '@storybook/theming';

export default function DocsContainerWrapper(props) {
  console.log('hello props', props);
  return (
    <DocsContainer {...props}>
      <Title />
      {/* <Subtitle />*/}

      {props.children}
    </DocsContainer>
  );
}
