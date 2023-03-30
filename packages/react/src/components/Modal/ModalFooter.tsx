import * as React from 'react';
import Button from '../Button/Button';
import useSettings from '../../hooks/useSettings';

interface ModalFooterProps {
  passiveModal?: boolean;
  secondaryButtonText?: string;
  onSecondaryButtonClick?: (
    evt: Event,
    trigger: 'button' | 'background' | 'key'
  ) => void;
  primaryButtonText?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onRequestSubmit?: () => {};
  primaryButtonDisabled?: boolean;
  secondaryButtonDisabled?: boolean;
  danger?: boolean;
  prefix?: string;
  ref?: React.RefObject<HTMLInputElement>;
}

const ModalFooter: React.FC<ModalFooterProps> = ({
  passiveModal,
  secondaryButtonText,
  onSecondaryButtonClick,
  primaryButtonText,
  onRequestSubmit,
  primaryButtonDisabled,
  secondaryButtonDisabled,
  danger,
  ref,
}) => {
  const { prefix } = useSettings();
  if (passiveModal) return null;

  return (
    <div className={`${prefix}--modal-footer`}>
      <div className={`${prefix}--modal__buttons-container`}>
        {secondaryButtonText && (
          <Button
            kind={danger ? 'tertiary' : 'secondary'}
            disabled={secondaryButtonDisabled}
            id="secondaryButton"
            onClick={(e) => onSecondaryButtonClick(e, 'button')}>
            {secondaryButtonText}
          </Button>
        )}
        <Button
          kind={danger ? 'danger--primary' : 'primary'}
          disabled={primaryButtonDisabled}
          onClick={onRequestSubmit}
          id="primaryButton"
          ref={ref}>
          {primaryButtonText}
        </Button>
      </div>
    </div>
  );
};
export default ModalFooter;
