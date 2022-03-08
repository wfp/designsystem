import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Button from '../Button';
import { iconArrowLeft, iconArrowRight } from '@wfp/icons';
import settings from '../../globals/js/settings';
const { prefix } = settings;

export default class FormControls extends React.Component {
  static propTypes = {
    /**
     * Specify the text to be read by screen-readers when visiting the <Tabs>
     * component
     */
    className: PropTypes.string,
    onNextClick: PropTypes.func,
    nextDisabled: PropTypes.bool,
    nextIcon: PropTypes.object,
    nextHidden: PropTypes.bool,
    nextText: PropTypes.node,
    onPreviousClick: PropTypes.func,
    previousDisabled: PropTypes.bool,
    previousIcon: PropTypes.object,
    previousHidden: PropTypes.bool,
    previousText: PropTypes.node,
    onSubmitClick: PropTypes.func,
    submitDisabled: PropTypes.bool,
    submitIcon: PropTypes.object,
    submitHidden: PropTypes.bool,
    submitText: PropTypes.node,
  };

  static defaultProps = {
    nextIcon: iconArrowRight,
    nextText: 'Next',
    previousIcon: iconArrowLeft,
    previousText: 'Previous',
    submitText: 'Submit',
  };

  render() {
    const {
      className,
      onNextClick,
      nextDisabled,
      nextIcon,
      nextHidden,
      nextText,
      onPreviousClick,
      previousDisabled,
      previousIcon,
      previousHidden,
      previousText,
      onSubmitClick,
      submitDisabled,
      submitIcon,
      submitHidden,
      submitText,
    } = this.props;

    const formControlsClasses = classNames(
      `${prefix}--form-controls`,
      className
    );

    return (
      <div className={formControlsClasses}>
        <div className={`${prefix}--form-controls__steps`}>
          {!previousHidden && (
            <Button
              disabled={previousDisabled}
              kind="secondary"
              className={`${prefix}--form-controls__prev`}
              icon={previousIcon}
              onClick={onPreviousClick}
            >
              {previousText}
            </Button>
          )}
        </div>
        <div>
          {!nextHidden && (
            <Button
              disabled={nextDisabled}
              kind="secondary"
              className={`${prefix}--form-controls__next`}
              icon={nextIcon}
              type="submit"
              onClick={onNextClick}
            >
              {nextText}
            </Button>
          )}
          {!submitHidden && (
            <Button
              disabled={submitDisabled}
              type="submit"
              className="next"
              icon={submitIcon}
              onClick={onSubmitClick}
            >
              {submitText}
            </Button>
          )}
        </div>
      </div>
    );
  }
}
