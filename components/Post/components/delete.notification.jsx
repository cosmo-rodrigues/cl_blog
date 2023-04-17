import React from 'react';
import {
  ButtonCancel,
  ButtonDelete,
  ButtonsContainer,
  Container,
  Text,
} from './delete.notification.style';

export function DeleteNotification({
  handleDeleteConfirm,
  handleDeleteCancel,
  selectedCard,
}) {
  return (
    <Container>
      <Text>Are you sure you want to delete this card?</Text>
      <ButtonsContainer>
        <ButtonCancel onClick={handleDeleteCancel}>Cancel</ButtonCancel>
        <ButtonDelete onClick={() => handleDeleteConfirm(selectedCard.id)}>
          Delete
        </ButtonDelete>
      </ButtonsContainer>
    </Container>
  );
}
