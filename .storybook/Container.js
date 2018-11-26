import React, { Component } from 'react';
import './polyfills';
import './_container.scss';
import '../assets/css/styles.css';

import { setOptions } from '@storybook/addon-options';

import SingleComponent from '../src/documentation/SingleComponent';

export default class Container extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { context, story } = this.props;

    console.log("context, story", );

    if (context.story.includes('html')) {
      setOptions({ selectedAddonPanel: 'lucid-docs-panel-code' });
    } else if (context.story.includes('Right to left')) {
      setOptions({ selectedAddonPanel: 'storybook/rtl/rtl-panel' });
    } else {
      setOptions({ selectedAddonPanel: 'REACT_STORYBOOK/readme/panel' });
    }

    const storyRender = story();
    const flexBasis = storyRender.props['data-flexbasis'];

    if (context && !context.kind.indexOf(' ') == 0) {
      return (
        <div role="main">
          <SingleComponent flexBasis={flexBasis ? flexBasis : undefined} html={context.story.includes('html') ? true : false}>
            { storyRender }
          </SingleComponent>
        </div>
      );
    } else if (context.story.includes('html')) {
      return (
        <div role="main">
          <HtmlComponent html={Html}>{ storyRender}</HtmlComponent>
        </div>
      );
    } else {
      return (
        <div role="main" id="container">
          { storyRender }
        </div>
      );
    }
  }
}
