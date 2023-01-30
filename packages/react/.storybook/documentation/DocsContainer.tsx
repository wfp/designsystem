import React from 'react';
import { Title, DocsContainer } from '@storybook/addon-docs';
import { themes } from '@storybook/theming';

export default function DocsContainerWrapper(props) {
  if (props.context.parameters.fullPage) {
    return (
      <div className="fullPage">
        <DocsContainer {...props}>{props.children}</DocsContainer>
      </div>
    );
  }
  return (
    <DocsContainer {...props}>
      <Title />
      {/* <Subtitle />*/}
      {props.children}
    </DocsContainer>
  );
}
