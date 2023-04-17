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
  selectedPost,
}) {
  return (
    <Container>
      <Text>Are you sure you want to delete this card?</Text>
      <ButtonsContainer>
        <ButtonCancel onClick={handleDeleteCancel}>Cancel</ButtonCancel>
        <ButtonDelete onClick={() => handleDeleteConfirm(selectedPost.id)}>
          Delete
        </ButtonDelete>
      </ButtonsContainer>
    </Container>
  );
}
