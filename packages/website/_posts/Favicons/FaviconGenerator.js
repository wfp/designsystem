/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */

import React from 'react';

export default function FaviconGenerator() {
  return <div>FaviconGenerator</div>;
}

/*
import React, { Component } from 'react';
import {
  Button,
  TextInput,
  Module,
  ModuleBody,
  ReduxFormWrapper,
} from '@un/react';

import { Form, Field } from 'react-final-form';
import { Package } from './favicon/favicon.js';

import centerjs from './favicon/center';
import colors from '../../globals/data/colors.js';

const canvas = {
  width: 128,
  height: 128,
};

class FaviconCanvas extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }
  updateCanvas() {
    const context = this.refs.canvas.getContext('2d');
    context.clearRect(0, 0, 300, 300);

    var mainColor = colors.main.hex;

    const name =
      this.props.name && this.props.name.length >= 1 ? this.props.name : '–';
    centerjs({
      canvas: this.refs.canvas,
      width: canvas.width,
      height: canvas.height,
      shape: 'square',
      fontColor: '#ffffff',
      backgroundColor: mainColor,
      text: name.toUpperCase(),
      fontFamily: 'Open Sans',
      fontWeight: 'bold',
      fontSize: 15 + (120 * 1) / name.length,
    });
  }

  download = () => {
    const canvas = document.getElementById('canvas');
    const dataurl = Package.generate(canvas);
    //const dataurl = ico.generate([16, 32, 48]);

    this.props.updateUrl(dataurl);
  };

  render() {
    return <canvas id="canvas" ref="canvas" width={128} height={128} />;
  }
}

const onSubmit = async (values) => {
  window.alert(JSON.stringify(values, 0, 2));
};

export default class FaviconGenerator extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = { dataurl: {} };
  }

  onClick = () => {
    this.child.current.download();
  };

  updateUrl = (dataurl) => {
    this.setState({
      dataurl: dataurl,
    });
  };

  render() {
    const buttonElements = Object.keys(this.state.dataurl).map((file, i) => (
      <React.Fragment>
        <Button
          download={`wfp-favicon-${file}.${file.substring(0, 3)}`}
          kind="secondary"
          small
          href={this.state.dataurl[file]}>
          {file}
        </Button>{' '}
      </React.Fragment>
    ));
    return (
      <div>
        <Form
          onSubmit={onSubmit}
          initialValues={{
            name: 'WFP',
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Module light className="some-class" style={{ padding: '1em 0' }}>
                <ModuleBody>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                    <div className="wfp--form-long">
                      <Field
                        name="name"
                        component={ReduxFormWrapper}
                        inputComponent={TextInput}
                        type="text"
                        labelText="Acronym"
                        helperText="Abbreviation of the applications name, like: WSS, WFP, INFO"
                        placeholder="WFP"
                      />
                      <div className="wfp--form-item">
                        <Button onClick={this.onClick}>Generate files</Button>
                      </div>
                      <div style={{ marginBottom: '1rem' }}>
                        {Object.keys(this.state.dataurl).length > 0 && (
                          <React.Fragment>
                            <h4>Download</h4>
                            {buttonElements}
                          </React.Fragment>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="wfp--label">Preview</label>
                      <br />
                      <FaviconCanvas
                        updateUrl={this.updateUrl}
                        {...values}
                        ref={this.child}
                      />
                    </div>
                  </div>
                </ModuleBody>
              </Module>
            </form>
          )}
        />
      </div>
    );
  }
}
*/
