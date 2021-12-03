import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { iconSearch, iconCloseGlyph } from '@unitednations/icons-react';
import Input from '../Input/Input';

/** Search enables users to specify a word or a phrase to find particular relevant pieces of content without the use of navigation. Search can be used as the primary means of discovering content, or as a filter to aid the user in finding content. */
export default class Search extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    /**
     *  Input type should be `search` or `text`
     */
    small: PropTypes.bool,
    placeHolderText: PropTypes.string,
    labelText: PropTypes.node,
    id: PropTypes.string,
    onChange: PropTypes.func,
    onSearchIconClick: PropTypes.func,
    closeButtonLabelText: PropTypes.string,
    /**
     *  Different styling options are available `large`, `small`, `banner`, `main`, `light`
     */
    kind: PropTypes.oneOf([
      undefined,
      'large',
      'small',
      'banner',
      'main',
      'light',
    ]),
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

  clearInput = (evt) => {
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

  handleChange = (evt) => {
    this.setState({
      hasContent: evt.target.value !== '',
    });

    this.props.onChange(evt);
  };

  render() {
    const {
      className,
      closeButtonLabelText,
      formItemClassName,
      type,
      id = (this._inputId =
        this._inputId ||
        `search__input__id_${Math.random().toString(36).substr(2)}`),
      placeHolderText,
      labelText,

      light,
      small,
      kind,
      onSearchIconClick,
      ...other
    } = this.props;

    const { hasContent } = this.state;

    const searchClasses = classNames(formItemClassName, {
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
    /*<div className={searchClasses} role="search">*/
    return (
      <Input {...this.props} formItemClassName={searchClasses}>
        {(e) => {
          return (
            <>
              <Icon
                icon={iconSearch}
                description={labelText}
                className="wfp--search-magnifier"
                onClick={onSearchIconClick}
              />
              {/*<label htmlFor={id} className="wfp--label">
          {labelText}
      </label>*/}
              <input
                {...other}
                type={type}
                className="wfp--search-input"
                id={id}
                placeholder={placeHolderText}
                onChange={this.handleChange}
                ref={(input) => {
                  this.input = input;
                }}
              />
              <button
                className={clearClasses}
                onClick={this.clearInput}
                type="button"
                aria-label={closeButtonLabelText}>
                <Icon
                  icon={iconCloseGlyph}
                  description={closeButtonLabelText}
                />
              </button>
            </>
          );
        }}
      </Input>
    );
  }
}
