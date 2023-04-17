import { useState } from 'react';
import { BlurredBackground, Modal } from './modal.style';

export function ModalComponent({ children, isModalOpen, setIsModalOpen }) {
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {isModalOpen && (
        <>
          <BlurredBackground />
          <Modal onClick={() => setIsModalOpen(false)}>{children}</Modal>
        </>
      )}
    </div>
  );
}
