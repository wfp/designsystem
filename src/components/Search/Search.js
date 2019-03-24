import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { iconSearch, iconCloseGlyph } from '@wfp/icons';

export default class Search extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    /**
     *  Input type should be `search` or `text`
     */
    small: PropTypes.bool,
    placeHolderText: PropTypes.string,
    labelText: PropTypes.node.isRequired,
    id: PropTypes.string,
    onChange: PropTypes.func,
    onSearchIconClick: PropTypes.func,
    closeButtonLabelText: PropTypes.string,
    /**
     *  Different styling options are available `large`, `small`, `banner`, `main`, `light`
     */
    kind: PropTypes.string,
  };

  static defaultProps = {
    type: 'text',
    small: false,
    kind: 'large',
    placeHolderText: '',
    onChange: () => {},
    onSearchIconClick: () => {},
    light: false,
  };

  state = {
    hasContent: this.props.value || this.props.defaultValue || false,
  };

  clearInput = evt => {
    if (!this.props.value) {
      this.input.value = '';
      this.props.onChange(evt);
    } else {
      const clearedEvt = Object.assign({}, evt.target, {
        target: {
          value: '',
        },
      });
      this.props.onChange(clearedEvt);
    }

    this.setState({ hasContent: false }, () => this.input.focus());
  };

  handleChange = evt => {
    this.setState({
      hasContent: evt.target.value !== '',
    });

    this.props.onChange(evt);
  };

  render() {
    const {
      className,
      type,
      id = (this._inputId =
        this._inputId ||
        `search__input__id_${Math.random()
          .toString(36)
          .substr(2)}`),
      placeHolderText,
      labelText,
      closeButtonLabelText,
      light,
      small,
      kind,
      onSearchIconClick,
      ...other
    } = this.props;

    const { hasContent } = this.state;

    const searchClasses = classNames({
      'wfp--search': true,
      'wfp--search--lg': kind === 'large',
      'wfp--search--sm': kind === 'small',
      'wfp--search--main': kind === 'main',
      'wfp--search--banner': kind === 'banner',
      'wfp--search--light': kind === 'light',
      [className]: className,
    });

    const clearClasses = classNames({
      'wfp--search-close': true,
      'wfp--search-close--hidden': !hasContent,
    });

    return (
      <div className={searchClasses} role="search">
        <Icon
          icon={iconSearch}
          description={labelText}
          className="wfp--search-magnifier"
          onClick={onSearchIconClick}
        />
        <label htmlFor={id} className="wfp--label">
          {labelText}
        </label>
        <input
          {...other}
          type={type}
          className="wfp--search-input"
          id={id}
          placeholder={placeHolderText}
          onChange={this.handleChange}
          ref={input => {
            this.input = input;
          }}
        />
        <button
          className={clearClasses}
          onClick={this.clearInput}
          type="button"
          aria-label={closeButtonLabelText}>
          <Icon icon={iconCloseGlyph} description={closeButtonLabelText} />
        </button>
      </div>
    );
  }
}
