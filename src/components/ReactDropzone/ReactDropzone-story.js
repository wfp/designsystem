import React from 'react';
import { storiesOf } from '@storybook/react';

import Dropzone, { useDropzone } from 'react-dropzone';
import Tippy from '@tippy.js/react';
import { tooltipStyle, tooltipStyleDark } from './Tooltip';
import { iconUpload } from '@wfp/icons';
import Icon from '../Icon';
import classNames from 'classnames';

function Basic(props) {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {Math.round(file.size / 1000)} kB
    </li>
  ));

  const className = classNames('wfp--dropzone__input', {
    'wfp--dropzone__input--drag-active': isDragActive,
    [className]: className,
  });

  return (
    <section className="wfp--dropzone">
      <div {...getRootProps({ isDragActive, className: className })}>
        <input {...getInputProps()} />
        <Icon className="wfp--dropzone__icon" icon={iconUpload} />
        <p>Drop files or click here to upload</p>
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
