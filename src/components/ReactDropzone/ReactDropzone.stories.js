import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import { List, ListItem } from '../List';
import Dropzone, { useDropzone } from 'react-dropzone';
import Icon from '../Icon';
import { iconUpload } from '@wfp/icons';
import classNames from 'classnames';

export default {
  title: 'Components/React-Dropzone',
  component: List,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    subcomponents: { ListItem },
  },
};

export const Regular = (args) => (
  <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
    {({ getRootProps, getInputProps }) => (
      <section className="wfp--dropzone">
        <div {...getRootProps({ className: 'wfp--dropzone__input' })}>
          <input {...getInputProps()} />
          <div>Drag 'n' drop some files here, or click to select files</div>
        </div>
      </section>
    )}
  </Dropzone>
);

Regular.args = {
  colon: true,
};

Regular.parameters = {
  docs: {
    source: {
      code: `<Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section className="wfp--dropzone">
          <div {...getRootProps({ className: 'wfp--dropzone__input' })}>
            <input {...getInputProps()} />
            <div>Drag 'n' drop some files here, or click to select files</div>
          </div>
        </section>
      )}
    </Dropzone>`,
    },
  },
};

export const Advanced = (args) => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <ListItem key={file.path}>
      {file.path} - {Math.round(file.size / 1000)} kB
    </ListItem>
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
        <div>Drop files or click here to upload</div>
      </div>
      <aside className="wfp--dropzone__file-list">
        <h4>Files</h4>
        <List>{files}</List>
      </aside>
    </section>
  );
};
