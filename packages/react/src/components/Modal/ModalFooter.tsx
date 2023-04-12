import * as React from 'react';
import Button from '../Button';
import useSettings from '../../hooks/useSettings';

interface ModalFooterProps {
  passiveModal?: boolean;
  secondaryButtonText?: string;
  onSecondaryButtonClick?: (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    trigger: 'button' | 'background' | 'key'
  ) => void;
  primaryButtonText?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  onRequestSubmit?: () => void;
  primaryButtonDisabled?: boolean;
  secondaryButtonDisabled?: boolean;
  danger?: boolean;
  prefix?: string;
  primaryButtonRef?: React.RefObject<HTMLButtonElement>;
  secondaryButtonRef?: React.RefObject<HTMLButtonElement>;
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
  primaryButtonRef,
  secondaryButtonRef,
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
            onClick={(e) => {
              if (onSecondaryButtonClick) onSecondaryButtonClick(e, 'button');
            }}
            ref={secondaryButtonRef as React.Ref<HTMLButtonElement>}>
            {secondaryButtonText}
          </Button>
        )}
        <Button
          kind={danger ? 'danger--primary' : 'primary'}
          disabled={primaryButtonDisabled}
          onClick={onRequestSubmit}
          id="primaryButton"
          ref={primaryButtonRef as React.Ref<HTMLButtonElement>}>
          {primaryButtonText}
        </Button>
      </div>
    </div>
  );
};
export default ModalFooter;
