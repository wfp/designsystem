import React from 'react';

export default function ModalFooter({
  passiveModal,
  modalLabel,
  modalHeading,
  modalButton,
  modalSecondaryAction,
  prefix,
}) {
  if (passiveModal) return null;
  return (
    <div className={`${prefix}--modal-header`}>
      {passiveModal && modalButton}
      <div>
        {modalLabel && (
          <h4 className={`${prefix}--modal-header__label`}>{modalLabel}</h4>
        )}
        <h2 className={`${prefix}--modal-header__heading`}>{modalHeading}</h2>
      </div>
      {modalSecondaryAction && <>{modalSecondaryAction}</>}
      {!passiveModal && modalButton}
    </div>
  );
}
