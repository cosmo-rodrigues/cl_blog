import { useState } from 'react';
import { BlurredBackground, Modal } from './modal.style';

export function ModalComponent({ isModalOpen, setIsModalOpen }) {
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {isModalOpen && (
        <>
          <BlurredBackground />
          <Modal>
            <h1>Modal Content</h1>
            <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
          </Modal>
        </>
      )}
    </div>
  );
}
