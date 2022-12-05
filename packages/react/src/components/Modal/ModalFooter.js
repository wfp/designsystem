import React from 'react';
import Button from '../Button/Button';

export default function ModalFooter({
  passiveModal,
  secondaryButtonText,
  onSecondaryButtonClick,
  primaryButtonText,
  onRequestSubmit,
  primaryButtonDisabled,
  prefix,
  secondaryButtonDisabled,
  danger,
  ref,
}) {
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
}
