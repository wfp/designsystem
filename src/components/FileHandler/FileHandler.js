import React from 'react';
import { useDropzone } from 'react-dropzone';
import classNames from 'classnames';
import Button from '../Button';
import { iconUpload } from '@wfp/icons';
import settings from '../../globals/js/settings';
import { Filename } from '../FileUploader';

const { prefix } = settings;

function Filehandler(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const existingFiles = props.files.map(file => (
    <li key={file.path}>
      <Filename status="edit" />
      <span className={`${prefix}--file-path`}>{file.path}</span>
      <span className={`${prefix}--file-size`}>{file.size} bytes</span>
    </li>
  ));

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path}
      {file.size} bytes
    </li>
  ));

  const dropzoneClasses = classNames(`${prefix}--file-dropzone`, {
    [`${prefix}--visually-hidden`]: props.dd,
  });

  return (
    <section className="container">
      <div {...getRootProps({ className: dropzoneClasses })}>
        <input {...getInputProps()} />
        <p>Drag and drop files here</p>
        <Button icon={iconUpload} className={`${prefix}--file-btn`} small>
          Browse files
        </Button>
      </div>
      <aside>
        <h4>Existing Files</h4>
        <ul className={`${prefix}--file-list`}>{files}</ul>
        <h4>Files</h4>
        <ul className={`${prefix}--file-list`}>{existingFiles}</ul>
      </aside>
    </section>
  );
}

export default Filehandler;
