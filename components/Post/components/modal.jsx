import { useState } from 'react';
import { BlurredBackground, Modal } from './modal.style';

export function ModalComponent({ children, isModalOpen}) {
  return (
    <>
      {isModalOpen && (
          <BlurredBackground>
            <Modal>{children}</Modal>
          </BlurredBackground>
      )}
    </>
  );
}
