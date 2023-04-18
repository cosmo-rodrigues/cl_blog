import { useState } from 'react';
import { BlurredBackground, Modal } from './modal.style';

export function ModalComponent({ children, isModalOpen, higher }) {
  return (
    <>
      {isModalOpen && (
        <BlurredBackground>
          <Modal higher={higher}>{children}</Modal>
        </BlurredBackground>
      )}
    </>
  );
}
