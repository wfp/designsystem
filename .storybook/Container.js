import React, { Component } from 'react';
import './polyfills';
import './_container.scss';
import '../assets/css/styles.css';

import { withOptions } from '@storybook/addon-options';

import SingleComponent from '../src/documentation/SingleComponent';

export default class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {context: {}};
  }



  static getDerivedStateFromProps(nextProps, prevState){

    console.log("state", nextProps.context.kind !== prevState.context.kind || nextProps.context.story !== prevState.context.story, nextProps.context.kind !== prevState.context.kind, nextProps.context.story !== prevState.context.story, nextProps.context, prevState.context);
      if(nextProps.context.kind !== prevState.context.kind || nextProps.context.story !== prevState.context.story){
        console.log("update now");
        window.scrollTo(0, 0);
        if (nextProps.context.story.includes('html')) {
          withOptions({ selectedAddonPanel: 'lucid-docs-panel-code' });
        } else if (nextProps.context.story.includes('Right to left')) {
          withOptions({ selectedAddonPanel: 'storybook/rtl' })
        } else {
          withOptions({ selectedAddonPanel: 'REACT_STORYBOOK/readme/panel' });
        }

        return {
          context: nextProps.context
        };

    }
    else return null;
  }

  render() {
    const { context, story } = this.props;

    console.log("context, story", this.props);

    const storyRender = story();
    const flexBasis = storyRender.props.children ? storyRender.props.children.props['data-flexbasis'] : undefined;

    console.log("render", storyRender);

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
