import React from 'react';
import {
  Container,
  FormContent,
  PostInput,
  PostLabel,
  Title,
  ButtonCancel,
  ButtonSave,
  ButtonsContainer,
  FormItem,
  Textarea,
} from './edit.style';

export function EditPost({
  handleEditConfirm,
  handleEditCancel,
  setSelectedPost,
  selectedPost,
}) {
  return (
    <Container>
      <Title>Edit item</Title>
      <FormContent>
        <FormItem>
          <PostLabel>Title</PostLabel>
          <PostInput
            value={selectedPost.title}
            onChange={(e) =>
              setSelectedPost({ ...selectedPost, title: e.target.value })
            }
          />
        </FormItem>
        <FormItem>
          <PostLabel>Content</PostLabel>
          <Textarea
            value={selectedPost.content}
            onChange={(e) =>
              setSelectedPost({ ...selectedPost, content: e.target.value })
            }
          />
        </FormItem>
      </FormContent>
      <ButtonsContainer>
        <ButtonCancel onClick={handleEditCancel}>Cancel</ButtonCancel>
        <ButtonSave onClick={() => handleEditConfirm(selectedPost)}>
          Save
        </ButtonSave>
      </ButtonsContainer>
    </Container>
  );
}
