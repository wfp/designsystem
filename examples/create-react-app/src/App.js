/*
Direct import via webpack-loader
import '@wfp/ui/src/globals/scss/styles.scss';
*/

import React, { Component } from 'react';
import { Icon } from '@wfp/ui';

import { iconAddGlyph } from '@wfp/icons';
import './App.scss';

class App extends Component {
  render() {
    return <Icon className="some-class" href="#" icon={iconAddGlyph} />;
  }
}

export default App;
