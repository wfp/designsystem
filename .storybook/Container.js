import React, { Component } from 'react';
import './polyfills';
import './_container.scss';
import '../assets/css/styles.css';

export default class Container extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { story } = this.props;

    return (
      <div
        role="main"
        style={
          {
            //maxWidth: '1000px',
            //margin: 'auto',
            //margin: '2em'
            //padding: '3em',
            //display: 'flex',
            //flexDirection: 'column',
            //alignItems: 'center',
          }
        }>
        {story()}
      </div>
    );
  }
}
