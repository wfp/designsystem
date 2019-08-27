/* eslint react/no-multi-comp: "off" */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
import uid from '../../tools/uniqueId';
import { ButtonTypes } from '../../prop-types/types';
import Filename from '../FileUploader/Filename';
import FileUploaderButton from '../FileUploader/FileUploaderButton';

const { prefix } = settings;

export default class FileUploader extends Component {
  static propTypes = {
    /**
     * Provide a description for the complete/close icon that can be read by screen readers
     */
    iconDescription: PropTypes.string,

    /**
     * Provide the label text to be read by screen readers when interacting with
     * the <FileUploaderButton>
     */
    buttonLabel: PropTypes.string,

    /**
     * Specify the type of the <FileUploaderButton>
     */
    buttonKind: ButtonTypes.buttonKind,

    /**
     * Specify the status of the File Upload
     */
    filenameStatus: PropTypes.oneOf(['edit', 'complete', 'uploading'])
      .isRequired,

    /**
     * Specify the description text of this <FileUploader>
     */
    labelDescription: PropTypes.string,

    /**
     * Specify the title text of this <FileUploader>
     */
    labelTitle: PropTypes.string,

    /**
     * Specify if the component should accept multiple files to upload
     */
    multiple: PropTypes.bool,

    /**
     * Provide a name for the underlying `input` node
     */
    name: PropTypes.string,

    /**
     * Provide an optional `onClick` hook that is called each time the button is
     * clicked
     */
    onClick: PropTypes.func,

    /**
     * Provide an optional `onFilesChange` hook that is called each time a file is
     * changed
     */
    onFilesChange: PropTypes.func,

    /**
     * Provide a custom className to be applied to the container node
     */
    className: PropTypes.string,

    /**
     * Specify the types of files that this input should be able to receive
     */
    accept: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    iconDescription: 'Provide icon description',
    filenameStatus: 'uploading',
    buttonLabel: '',
    buttonKind: 'primary',
    multiple: false,
    onClick: () => {},
    onFilesChange: () => {},
    accept: [],
  };

  state = {
    filenames: [],
  };

  nodes = [];

  static getDerivedStateFromProps({ filenameStatus, files }, state) {
    const { prevFilenameStatus, prevFilenames } = state;
    return prevFilenameStatus === filenameStatus
      ? null
      : prevFilenames !== files
      ? null
      : //filenames: ['aaa']

        {
          filenameStatus,
          prevFilenameStatus: filenameStatus,
        };
  }

  handleChange = evt => {
    evt.stopPropagation();
    const fileArray = this.state.filenames.concat(
      Array.prototype.map.call(evt.target.files, file => file.name)
    );
    this.setState({
      filenames: fileArray,
    });
    this.props.onFilesChange(fileArray, evt);
    this.props.onChange(evt);
  };

  handleClick = (evt, index) => {
    console.log(this.nodes);
    const filteredArray = this.state.filenames.filter(
      filename => filename !== this.nodes[index].innerText.trim()
    );
    this.setState({ filenames: filteredArray });
    this.props.onFilesChange(filteredArray);
    this.props.onClick(evt);
  };

  clearFiles = () => {
    // A clearFiles function that resets filenames and can be referenced using a ref by the parent.
    this.setState({ filenames: [] });
    if (this.props.onFilesChange) {
      this.props.onFilesChange([]);
    }
  };

  render() {
    const {
      iconDescription,
      buttonLabel,
      buttonKind,
      filenameStatus,
      labelDescription,
      labelTitle,
      className,
      multiple,
      accept,
      name,
      onFilesChange,
      ...other
    } = this.props;

    const classes = classNames({
      [`${prefix}--form-item`]: true,
      [className]: className,
    });

    return (
      <div className={classes} {...other}>
        <strong className={`${prefix}--label`}>{labelTitle}</strong>
        <p className={`${prefix}--label-description`}>{labelDescription}</p>
        <FileUploaderButton
          labelText={buttonLabel}
          multiple={multiple}
          buttonKind={buttonKind}
          onChange={this.handleChange}
          disableLabelChanges
          accept={accept}
          name={name}
        />
        <div className={`${prefix}--file-container`}>
          {this.state.filenames.length === 0
            ? null
            : this.state.filenames.map((name, index) => (
                <span
                  key={index}
                  className={`${prefix}--file__selected-file`}
                  ref={node => (this.nodes[index] = node)} // eslint-disable-line
                  {...other}>
                  <p className={`${prefix}--file-filename`}>{name}</p>
                  <span className={`${prefix}--file__state-container`}>
                    <Filename
                      iconDescription={iconDescription}
                      status={filenameStatus}
                      onKeyDown={evt => {
                        if (evt.which === 13 || evt.which === 32) {
                          this.handleClick(evt, index);
                        }
                      }}
                      onClick={evt => {
                        if (filenameStatus === 'edit') {
                          this.handleClick(evt, index);
                        }
                      }}
                    />
                  </span>
                </span>
              ))}
        </div>
      </div>
    );
  }
}
