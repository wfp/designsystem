import React from 'react';
import { useDropzone } from 'react-dropzone';

function Filehandler(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const existingFiles = props.files.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Existing Files</h4>
        <ul>{files}</ul>
        <h4>Files</h4>
        <ul>{existingFiles}</ul>
      </aside>
    </section>
  );
}

export default Filehandler;
