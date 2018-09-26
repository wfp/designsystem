import React, { Component } from 'react';
import './polyfills';
import './_container.scss';
import '../assets/css/styles.css';

import SingleComponent from '../src/documentation/SingleComponent';


export default class Container extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { context, story } = this.props;
    console.log(context);

    if (context && !context.kind[0] !== " ") {
      return (
        <div role="main">
          <SingleComponent>{story()}</SingleComponent>
        </div>
      );
    }
    else {
      return (
        <div
          role="main">
          {story()}
        </div>
      );
    }
  }
}
