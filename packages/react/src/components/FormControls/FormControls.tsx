import React from 'react';
import classNames from 'classnames';
import Button from '../Button';
// import { ArrowLeft, ArrowRight } from '@un/icons-react';
import useSettings from '../../hooks/useSettings';

interface FormControlsProps {
  className?: string;
  onNextClick?: () => void;
  nextDisabled?: boolean;
  nextIcon?: {};
  nextHidden?: boolean;
  nextText?: React.ReactNode;
  onPreviousClick?: () => void;
  previousDisabled?: boolean;
  previousIcon?: {};
  previousHidden?: boolean;
  previousText?: React.ReactNode;
  onSubmitClick?: () => void;
  submitDisabled?: boolean;
  submitIcon?: {};
  submitHidden?: boolean;
  submitText?: React.ReactNode;
}

const FormControls: React.FC<FormControlsProps> = ({
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
}) => {
  const { prefix } = useSettings();
  const formControlsClasses = classNames(`${prefix}--form-controls`, className);

  return (
    <div className={formControlsClasses}>
      <div className={`${prefix}--form-controls__steps`}>
        {!previousHidden && (
          <Button
            disabled={previousDisabled}
            kind="secondary"
            className={`${prefix}--form-controls__prev`}
            icon={previousIcon}
            onClick={onPreviousClick}>
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
            onClick={onNextClick}>
            {nextText}
          </Button>
        )}
        {!submitHidden && (
          <Button
            disabled={submitDisabled}
            type="submit"
            className="next"
            icon={submitIcon}
            onClick={onSubmitClick}>
            {submitText}
          </Button>
        )}
      </div>
    </div>
  );
};

// FormControls.propTypes = {
//   /**
//    * Specify the text to be read by screen-readers when visiting the <Tabs>
//    * component
//    */
//   className: PropTypes.string,
//   onNextClick: PropTypes.func,
//   nextDisabled: PropTypes.bool,
//   nextIcon: PropTypes.object,
//   nextHidden: PropTypes.bool,
//   nextText: PropTypes.node,
//   onPreviousClick: PropTypes.func,
//   prefix: PropTypes.string.isRequired,
//   previousDisabled: PropTypes.bool,
//   previousIcon: PropTypes.object,
//   previousHidden: PropTypes.bool,
//   previousText: PropTypes.node,
//   onSubmitClick: PropTypes.func,
//   submitDisabled: PropTypes.bool,
//   submitIcon: PropTypes.object,
//   submitHidden: PropTypes.bool,
//   submitText: PropTypes.node,
// };

// FormControls.defaultProps = {
//   nextIcon: ArrowRight,
//   nextText: 'Next',
//   previousIcon: ArrowLeft,
//   previousText: 'Previous',
//   submitText: 'Submit',
// };

export default FormControls;
