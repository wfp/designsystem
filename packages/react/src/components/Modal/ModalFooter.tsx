import React from 'react';
import Button from '../Button/Button';
import useSettings from '../../hooks/useSettings';

interface ModalFooterProps {
  passiveModal?: boolean;
  secondaryButtonText?: string;
  onSecondaryButtonClick?: () => void;
  primaryButtonText?: string;
  onRequestSubmit?: () => {};
  primaryButtonDisabled?: boolean;
  secondaryButtonDisabled?: boolean;
  danger?: boolean;
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
            onClick={onSecondaryButtonClick}>
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
