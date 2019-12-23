/* eslint react/no-multi-comp: "off" */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import settings from '../../globals/js/settings';
import uid from '../../tools/uniqueId';
import { ButtonTypes } from '../../prop-types/types';
//import Filename from '../FileUploader/Filename';

const { prefix } = settings;

export class FileUploaderButton extends Component {
  state = {};

  static propTypes = {
    /**
     * Provide a custom className to be applied to the container node
     */
    className: PropTypes.string,

    /**
     * Specify whether you want to disable any updates to the FileUploaderButton
     * label
     */
    disableLabelChanges: PropTypes.bool,

    /**
     * Provide a unique id for the underlying `input` node
     */
    id: PropTypes.string,

    /**
     * Provide the label text to be read by screen readers when interacting with
     * this control
     */
    labelText: PropTypes.string,

    /**
     * Specify whether you want the component to list the files that have been
     * submitted to be uploaded
     */
    listFiles: PropTypes.bool,

    /**
     * Specify if the component should accept multiple files to upload
     */
    multiple: PropTypes.bool,

    /**
     * Provide a name for the underlying `input` node
     */
    name: PropTypes.string,

    /**
     * Provide an optional `onChange` hook that is called each time the <input>
     * value changes
     */
    onChange: PropTypes.func,

    /**
     * Provide an optional `onClick` hook that is called each time the button is
     * clicked
     */
    onClick: PropTypes.func,

    /**
     * Provide an accessibility role for the <FileUploaderButton>
     */
    role: PropTypes.string,

    /**
     * Provide a custom tabIndex value for the <FileUploaderButton>
     */
    tabIndex: PropTypes.number,

    /**
     * Specify the type of underlying button
     */
    buttonKind: ButtonTypes.buttonKind,

    /**
     * Specify the types of files that this input should be able to receive
     */
    accept: PropTypes.arrayOf(PropTypes.string),

    /**
     * Specify whether file input is disabled
     */
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    tabIndex: 0,
    disableLabelChanges: false,
    labelText: 'Add file',
    buttonKind: 'primary',
    multiple: false,
    onChange: () => {},
    onClick: () => {},
    accept: [],
    disabled: false,
  };

  static getDerivedStateFromProps({ labelText }, state) {
    const { prevLabelText } = state;
    return prevLabelText === labelText
      ? null
      : {
          labelText,
          prevLabelText: labelText,
        };
  }

  handleChange = evt => {
    const files = evt.target.files;
    const length = evt.target.files.length;
    if (files && !this.props.disableLabelChanges) {
      if (length > 1) {
        this.setState({ labelText: `${length} files` });
      } else if (length === 1) {
        this.setState({ labelText: files[0].name });
      }
    }
    this.props.onChange(evt);
  };

  render() {
    const {
      className,
      disableLabelChanges, // eslint-disable-line
      labelText, // eslint-disable-line
      multiple,
      role,
      tabIndex,
      buttonKind,
      accept,
      name,
      disabled,
      ...other
    } = this.props;
    const classes = classNames({
      [`${prefix}--btn`]: true,
      [`${prefix}--btn--${buttonKind}`]: true,
      [className]: className,
    });

    this.uid = this.props.id || uid();

    return (
      <>
        <label
          role="button"
          tabIndex={tabIndex || 0}
          className={classes}
          onKeyDown={evt => {
            if (evt.which === 13 || evt.which === 32) {
              this.input.click();
            }
          }}
          htmlFor={this.uid}
          {...other}>
          {this.state.labelText}
        </label>
        <input
          className={`${prefix}--visually-hidden`}
          ref={input => (this.input = input)}
          id={this.uid}
          disabled={disabled}
          type="file"
          tabIndex="-1"
          multiple={multiple}
          accept={accept}
          name={name}
          onChange={this.handleChange}
          onClick={evt => {
            evt.target.value = null;
          }}
        />
      </>
    );
  }
}
