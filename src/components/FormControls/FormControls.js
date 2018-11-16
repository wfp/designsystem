import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Button from '../Button';

export default class Tabs extends React.Component {
  static propTypes = {
    /**
     * Specify the text to be read by screen-readers when visiting the <Tabs>
     * component
     */
    ariaLabel: PropTypes.string,
  };

  static defaultProps = {
    nextText: 'Next',
    previousText: 'Previous',
    submitText: 'Submit',
    selected: 0,
    ariaLabel: 'listbox',
  };

  state = {
    dropdownHidden: true,
  };

  static getDerivedStateFromProps({ selected }, state) {
    const { prevSelected } = state;
    return prevSelected === selected
      ? null
      : {
          selected,
          prevSelected: selected,
        };
  }

  getTabs() {
    return React.Children.map(this.props.children, tab => tab);
  }

  getTabAt = index => {
    return (
      this[`tab${index}`] || React.Children.toArray(this.props.children)[index]
    );
  };

  setTabAt = (index, tabRef) => {
    this[`tab${index}`] = tabRef;
  };

  // following functions (handle*) are Props on Tab.js, see Tab.js for parameters
  handleTabClick = onSelectionChange => {
    return (index, label, evt) => {
      evt.preventDefault();
      this.selectTabAt(index, onSelectionChange);
      this.setState({
        dropdownHidden: true,
      });
    };
  };

  handleTabKeyDown = onSelectionChange => {
    return (index, label, evt) => {
      const key = evt.key || evt.which;

      if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
        this.selectTabAt(index, onSelectionChange);
        this.setState({
          dropdownHidden: true,
        });
      }
    };
  };

  handleTabAnchorFocus = onSelectionChange => {
    return index => {
      const tabCount = React.Children.count(this.props.children) - 1;
      let tabIndex = index;

      if (index < 0) {
        tabIndex = tabCount;
      } else if (index > tabCount) {
        tabIndex = 0;
      }

      const tab = this.getTabAt(tabIndex);

      if (tab) {
        this.selectTabAt(tabIndex, onSelectionChange);
        if (tab.tabAnchor) {
          tab.tabAnchor.focus();
        }
      }
    };
  };

  handleDropdownClick = () => {
    this.setState({
      dropdownHidden: !this.state.dropdownHidden,
    });
  };

  selectTabAt = (index, onSelectionChange) => {
    if (this.state.selected !== index) {
      this.setState({
        selected: index,
      });
      if (typeof onSelectionChange === 'function') {
        onSelectionChange(index);
      }
    }
  };

  render() {
    const {
      inline,
      className,
      onNextClick,
      nextDisabled,
      nextHidden,
      nextText,
      onPreviousClick,
      previousDisabled,
      previousHidden,
      previousText,
      onSubmitClick,
      submitDisabled,
      submitHidden,
      submitText,
    } = this.props;

    const classes = {
      formControls: classNames('wfp--form-controls', className),
      tablist: classNames('wfp--step-navigation__nav', {
        'wfp--step-navigation__nav--hidden': this.state.dropdownHidden,
        'wfp--step-navigation__nav--inline': inline,
      }),
    };

    return (
      <div className={classes.formControls}>
        <div>
          {!previousHidden && (
            <Button
              disabled={previousDisabled}
              kind="secondary"
              className="wfp--form-controls__prev"
              icon="arrow--left"
              onClick={onPreviousClick}>
              {previousText}
            </Button>
          )}
          {!nextHidden && (
            <Button
              disabled={nextDisabled}
              kind="secondary"
              className="wfp--form-controls__next"
              icon="arrow--right"
              type="submit"
              onClick={onNextClick}>
              {nextText}
            </Button>
          )}
        </div>
        <div>
          {!submitHidden && (
            <Button
              disabled={submitDisabled}
              type="submit"
              className="next"
              onClick={onSubmitClick}>
              {submitText}
            </Button>
          )}
        </div>
      </div>
    );
  }
}
