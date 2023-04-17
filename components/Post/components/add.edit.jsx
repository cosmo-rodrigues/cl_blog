import React from 'react';
import { Container } from './add.edit.style';

export function AddEdit({
  handleEditConfirm,
  handleEditCancel,
  selectedCard,
  setSelectedCard,
}) {
  return (
    <Container>
      <input
        value={selectedCard.title}
        onChange={(e) =>
          setSelectedCard({ ...selectedCard, title: e.target.value })
        }
      />
      <textarea
        value={selectedCard.content}
        onChange={(e) =>
          setSelectedCard({ ...selectedCard, content: e.target.value })
        }
      />
      <button onClick={handleEditConfirm}>Save</button>
      <button onClick={handleEditCancel}>Cancel</button>
    </Container>
  );
}
