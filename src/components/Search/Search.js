import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

export default class Search extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string,
    //small: PropTypes.bool,
    size: PropTypes.string,
    placeHolderText: PropTypes.string,
    labelText: PropTypes.node.isRequired,
    id: PropTypes.string,
    searchButtonLabelText: PropTypes.string,
    layoutButtonLabelText: PropTypes.string,
  };

  static defaultProps = {
    type: 'text',
    small: false,
    placeHolderText: '',
    onChange: () => {},
  };

  state = {
    format: 'list',
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

  toggleLayout = () => {
    if (this.state.format === 'list') {
      this.setState({
        format: 'grid',
      });
    } else {
      this.setState({
        format: 'list',
      });
    }
  };

  handleChange = evt => {
    this.setState({
      hasContent: evt.target.value !== '',
    });

    this.props.onChange(evt);
  };

  // eslint-disable-next-line consistent-return
  searchFilterBtn = () => {
    if (!this.props.small) {
      return (
        <button
          className="wfp--search-button"
          type="button"
          aria-label={this.props.searchButtonLabelText}>
          <Icon
            name="filter--glyph"
            description="filter"
            className="wfp--search-filter"
          />
        </button>
      );
    }
  };

  // eslint-disable-next-line consistent-return
  searchLayoutBtn = () => {
    if (!this.props.small) {
      return (
        <button
          className="wfp--search-button"
          type="button"
          onClick={this.toggleLayout}
          aria-label={this.props.layoutButtonLabelText}>
          {this.state.format === 'list' ? (
            <div className="wfp--search__toggle-layout__container">
              <Icon
                name="list"
                description="list"
                className="wfp--search-view"
              />
            </div>
          ) : (
            <div className="wfp--search__toggle-layout__container">
              <Icon
                name="grid"
                description="toggle-layout"
                className="wfp--search-view"
              />
            </div>
          )}
        </button>
      );
    }
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
      size,
      ...other
    } = this.props;

    const { hasContent } = this.state;

    const searchClasses = classNames({
      'wfp--search wfp--search-with-options': true,
      'wfp--search--lg': !size,
      'wfp--search--md': size === 'medium',
      'wfp--search--sm': size === 'small',
      [className]: className,
    });

    const clearClasses = classNames({
      'wfp--search-close': true,
      'wfp--search-close--hidden': !hasContent,
    });

    /*
      {this.searchFilterBtn()}
      {this.searchLayoutBtn()}
    */

    return (
      <div className={searchClasses} role="search">
        <Icon
          name="search--glyph"
          description="search"
          className="wfp--search-magnifier"
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
        <Icon
          name="close--glyph"
          description="close"
          className={clearClasses}
          onClick={this.clearInput}
        />
      </div>
    );
  }
}
