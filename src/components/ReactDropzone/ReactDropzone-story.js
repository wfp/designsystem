import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropzone, { useDropzone } from 'react-dropzone';
import Tippy from '@tippy.js/react';
import { tooltipStyle, tooltipStyleDark } from './Tooltip';

function Basic(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="wfp--dropzone">
      <div {...getRootProps({ className: 'wfp--dropzone__input' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside className="wfp--dropzone__file-list">
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

storiesOf('Components|React-Dropzone (experimental)', module)
  .add('default', () => (
    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section className="wfp--dropzone">
          <div {...getRootProps({ className: 'wfp--dropzone__input' })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  ))
  .add('advanced', () => <Basic />);
