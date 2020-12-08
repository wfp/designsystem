import React, { useState } from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import { List, ListItem } from '../List';
import Dropzone, { useDropzone } from 'react-dropzone';
import Icon from '../Icon';
import { iconUpload } from '@wfp/icons';
import classNames from 'classnames';

export default {
  title: 'Components/Forms/FileUploader (react-dropzone)',
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    introText: `[react-dropzone](https://github.com/react-dropzone/react-dropzone) for handling file uploads. It allows using simple react hooks to create a HTML5-compliant drag'n'drop zone for files.`,
  },
};

export const Regular = (args) => {
  const [file, setfile] = useState([])

  const files = file.map((file) => (
    <ListItem key={file.path}>
      {file.path} - {Math.round(file.size / 1000)} kB
    </ListItem>
  ));

  return(
  <>
  <Dropzone onDrop={(acceptedFiles) => setfile(acceptedFiles)}>
    {({ getRootProps, getInputProps }) => (
      <section className="wfp--dropzone">
        <div {...getRootProps({ className: 'wfp--dropzone__input' })}>
          <input {...getInputProps()} />
          <div>Drag 'n' drop some files here, or click to select files</div>
        </div>
      </section>
    )}
  </Dropzone>
  <aside className="wfp--dropzone__file-list">
        <h4>Files</h4>
        <List>{files}</List>
  </aside>
  </>
  
)
};

Regular.parameters = {
  html: false,
  docs: {
    source: {
      code: ` import Dropzone from 'react-dropzone';

      export const Regular = (args) => {
        const [file, setfile] = useState([])
      
        const files = file.map((file) => (
          <ListItem key={file.path}>
            {file.path} - {Math.round(file.size / 1000)} kB
          </ListItem>
        ));
      
        return(
        <>
        <Dropzone onDrop={(acceptedFiles) => setfile(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section className="wfp--dropzone">
              <div {...getRootProps({ className: 'wfp--dropzone__input' })}>
                <input {...getInputProps()} />
                <div>Drag 'n' drop some files here, or click to select files</div>
              </div>
            </section>
          )}
        </Dropzone>
        <aside className="wfp--dropzone__file-list">
              <h4>Files</h4>
              <List>{files}</List>
        </aside>
        </>
        
      )
      };`,
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

Advanced.parameters = {
  html: false,
  docs: {
    source: {
      code: `
import Dropzone, { useDropzone } from 'react-dropzone';
import { Icon, List, ListItem } from '@wfp/ui';
import { iconUpload } from '@wfp/icons';
import classNames from 'classnames';

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
}`,
    },
  },
};
