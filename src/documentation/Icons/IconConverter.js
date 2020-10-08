/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */

import React, { Component } from 'react';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';
import { Module, ModuleHeader, ModuleBody } from '../../components/Module';
import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import { Form, Field } from 'react-final-form';

import Blockquote from '../../components/Blockquote';
import PrismCode from 'react-prism';

const getJSON = require('./getJSON');
const formatJS = require('./formatJS');

export default class FaviconGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { dataurl: {} };
  }

  onSubmit = async (values) => {
    const result = getJSON(values.svg);
    const formatted = formatJS(result, { json: false });
    this.setState({
      json: formatted,
    });
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={this.onSubmit}
          initialValues={{
            svg: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
  <title>favorite--outline</title>
  <path d="M1.49,7.72A4.41,4.41,0,1,1,8,1.84a4.42,4.42,0,1,1,6.44,6L8,13.87Z"/>
</svg>
            `,
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} className="wfp--form-long">
              <Module light className="some-class" style={{ padding: '1em 0' }}>
                <ModuleHeader>Convert svg to icon</ModuleHeader>
                <ModuleBody>
                  <Field
                    name="svg"
                    component={ReduxFormWrapper}
                    inputComponent={TextArea}
                    type="text"
                    labelText="SVG code"
                    placeholder="Your svg code"
                  />
                  <Button type="submit" style={{ marginTop: '1em' }}>
                    Generate Icon
                  </Button>

                  {this.state.json && (
                    <div>
                      <br />
                      <label className="wfp--label">Preview</label>
                      <br />
                      <Module
                        light
                        className="some-class"
                        style={{ padding: '1em 0' }}>
                        <ModuleBody>
                          <Icon name="your icon" icon={this.state.json} />
                          <Icon
                            name="your icon"
                            width="50"
                            height="50"
                            icon={this.state.json}
                          />
                          <Icon
                            fill="#0b77c2"
                            name="your icon"
                            width="100"
                            height="100"
                            icon={this.state.json}
                          />
                        </ModuleBody>
                      </Module>
                      <Blockquote title="Icon json" code>
                        <PrismCode component="pre" className="language-json">
                          {JSON.stringify(this.state.json, null, 2)}
                        </PrismCode>
                      </Blockquote>

                      <Blockquote title="Component code" code>
                        <PrismCode component="pre" className="language-json">
                          {`<Icon 
  icon={${JSON.stringify(this.state.json, null, 2)}}
/>
`}
                        </PrismCode>
                      </Blockquote>
                    </div>
                  )}
                </ModuleBody>
              </Module>
            </form>
          )}
        />
      </div>
    );
  }
}
