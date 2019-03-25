/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import Link from '../../components/Link';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { Module, ModuleBody } from '../../components/Module';
import ReduxFormWrapper from '../../components/ReduxFormWrapper';
import { Form, Field } from 'react-final-form';
import { Package } from './favicon/favicon.js';
import Blockquote from '../../components/Blockquote';
import PrismCode from 'react-prism';

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
    console.log('dataurl', dataurl);
    //const dataurl = ico.generate([16, 32, 48]);

    this.props.updateUrl(dataurl);
  };

  render() {
    return <canvas id="canvas" ref="canvas" width={128} height={128} />;
  }
}

const onSubmit = async values => {
  window.alert(JSON.stringify(values, 0, 2));
};

class FaviconGenerator extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = { dataurl: {} };
  }

  onClick = () => {
    this.child.current.download();
  };

  updateUrl = dataurl => {
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
            <form onSubmit={handleSubmit} className="wfp--form-long">
              <Module light className="some-class" style={{ padding: '1em 0' }}>
                <ModuleBody>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                    <div>
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
                      {Object.keys(this.state.dataurl).length > 0 && (
                        <React.Fragment>
                          <h4>Download</h4>
                          {buttonElements}
                        </React.Fragment>
                      )}
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

storiesOf('Documentation|General', module).add('Favicons', () => {
  return (
    <Page title="Favicons" subTitle="The new Logos in various sizes">
      <p>
        For the main favicon itself, it's best for cross-browser compatibility
        not to use any HTML. Just name the file favicon.ico and place it in the
        root of your domain.
      </p>

      <h3>Internal Applications: Generate Favicon</h3>
      <p>
        Use the generator to create favicons with an acronym of applications
        name.
      </p>

      <FaviconGenerator />

      <h3>External Applications: Use with CDN</h3>
      <p>
        The favicons can be found in the{' '}
        <Link href="https://github.com/wfp/ui-assets/tree/master/src/favicons">
          @wfp/ui-assets
        </Link>{' '}
        repository and the Sketch source in the{' '}
        <Link href="https://github.com/wfp/ui-design-kit/blob/master/WFP%20Icons.sketch">
          @wfp/ui-design-kit
        </Link>{' '}
        repository.
      </p>
      <Blockquote
        title="Full sizes catalog which can be added to the HTML Head"
        type="code">
        <PrismCode component="pre" className="language-html">
          {`<link rel="apple-touch-icon" sizes="57x57" href="https://cdn.wfp.org/guides/ui/assets/v0.0.1/favicons/apple-touch-icon-57-precomposed.png">
<link rel="apple-touch-icon" sizes="72x72" href="https://cdn.wfp.org/guides/ui/assets/v0.0.1/favicons/apple-touch-icon-72-precomposed.png">
<link rel="apple-touch-icon" sizes="76x76" href="https://cdn.wfp.org/guides/ui/assets/v0.0.1/favicons/apple-touch-icon-56-precomposed.png">
<link rel="apple-touch-icon" sizes="114x114" href="https://cdn.wfp.org/guides/ui/assets/v0.0.1/favicons/apple-touch-icon-114-precomposed.png">
<link rel="apple-touch-icon" sizes="120x120" href="https://cdn.wfp.org/guides/ui/assets/v0.0.1/favicons/apple-touch-icon-120-precomposed.png">
<link rel="apple-touch-icon" sizes="144x144" href="https://cdn.wfp.org/guides/ui/assets/v0.0.1/favicons/apple-touch-icon-144-precomposed.png">
<link rel="apple-touch-icon" sizes="152x152" href="https://cdn.wfp.org/guides/ui/assets/v0.0.1/favicons/apple-touch-icon-152-precomposed.png">
<link rel="apple-touch-icon" sizes="180x180" href="https://cdn.wfp.org/guides/ui/assets/v0.0.1/favicons/apple-touch-icon-180-precomposed.png">

<link rel="icon" type="image/png" sizes="260x260"  href="https://cdn.wfp.org/guides/ui/assets/v0.0.1/favicons/favicon-260x260.png">
<link rel="icon" type="image/png" sizes="32x32" href="https://cdn.wfp.org/guides/ui/assets/v0.0.1/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="https://cdn.wfp.org/guides/ui/assets/v0.0.1/favicons/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="https://cdn.wfp.org/guides/ui/assets/v0.0.1/favicons/favicon-16x16.png">

<meta name="msapplication-TileColor" content="#0A6EB4">
<meta name="msapplication-TileImage" content="https://cdn.wfp.org/guides/ui/assets/v0.0.1/ms-icon-144x144.png">
<meta name="theme-color" content="#0A6EB4">`}
        </PrismCode>
      </Blockquote>
    </Page>
  );
});
