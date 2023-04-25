import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  TextInput,
  Module,
  ModuleBody,
  ReduxFormWrapper,
} from '@wfp/react';

import dynamic from 'next/dynamic';

import centerjs from './favicon/center';

//import { Package } from './favicon/favicon.js';

/*const Package = dynamic(() => import('./favicon/favicon.js'), {
  ssr: false,
});*/

//import colors from '@un/themes-Guidelines/dist/variables-full.json';

const canvas = {
  width: 128,
  height: 128,
};

function FaviconCanvas({ name = 'WFP', updateUrl }) {
  const canvasRef = useRef();

  useEffect(() => {
    updateCanvas();
  }, [name]);

  const updateCanvas = () => {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, 300, 300);

    var mainColor = '#0b77c2'; //colors.main.hex;

    const nameString = name.length >= 1 ? name : '–';
    centerjs({
      canvas: canvasRef.current,
      width: canvas.width,
      height: canvas.height,
      shape: 'square',
      fontColor: '#ffffff',
      backgroundColor: mainColor,
      text: nameString.toUpperCase(),
      fontFamily: 'Open Sans',
      fontWeight: 'bold',
      fontSize: 15 + (120 * 1) / nameString.length,
    });
  };

  return <canvas id="canvas" ref={canvasRef} width={128} height={128} />;
}

const onSubmit = async (values) => {
  // window.alert(JSON.stringify(values, 0, 2));
};

export default function FaviconGenerator() {
  const [name, setName] = useState('WFP');
  const [dataUrl, setDataUrl] = useState([]);
  const faviconRef = useRef();

  const generateFiles = async () => {
    const canvas = document.getElementById('canvas');

    const { Package } = await import('./favicon/favicon.js');

    const dataurl = Package.generate(canvas);
    //const dataurl = ico.generate([16, 32, 48]);
    setDataUrl(dataurl);

    //this.child.current.download();
  };

  const updateUrl = (dataurl) => {
    setDataUrl(dataUrl);
  };

  const buttonElements = Object.keys(dataUrl).map((file, i) => (
    <React.Fragment key={i}>
      <Button
        download={`wfp-favicon-${file}.${file.substring(0, 3)}`}
        kind="tertiary"
        small
        href={dataUrl[file]}>
        {file}
      </Button>{' '}
    </React.Fragment>
  ));

  return (
    <div>
      <form>
        <Module light className="some-class" style={{ padding: '1em 0' }}>
          <ModuleBody>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <div className="wfp--form-long">
                <TextInput
                  type="text"
                  labelText="Acronym"
                  helperText="Abbreviation of the applications name, like: WSS, WFP, INFO"
                  placeholder="WFP"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <div className="wfp--form-item">
                  <Button onClick={generateFiles} type="button">
                    Generate files
                  </Button>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  {Object.keys(dataUrl).length > 0 && (
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
                  updateUrl={updateUrl}
                  name={name}
                  ref={faviconRef}
                />
              </div>
            </div>
          </ModuleBody>
        </Module>
      </form>
    </div>
  );
  //}
}
