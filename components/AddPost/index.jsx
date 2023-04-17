import React, { useState } from 'react';
import { Container } from './styles';
import {
  Input,
  InputTextContent,
  RowRight,
  SubTitle,
  Title,
} from '../../style/globalStyles';
import Button from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, fetchPosts } from '../../actions/posts';
import { loginService } from '../../services/login';

export function AddPost() {
  const dispatch = useDispatch();

  const username = loginService.isLogged()
    ? loginService.isLogged().username
    : 'anonymous';

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = () => {
    dispatch(createPost({ title, content, username }));
    setTitle('');
    setContent('');
    dispatch(fetchPosts({ limit: 10, offset: 0, reset: true }));
  };

  return (
    <Container>
      <Title>What’s on your mind?</Title>

      <SubTitle>TItle</SubTitle>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Hello world'
      />

      <SubTitle>Content</SubTitle>
      <InputTextContent
        value={content}
        placeholder='Content here'
        onChange={(e) => setContent(e.target.value)}
      />

      <RowRight>
        <Button
          title='Enter'
          color='blue'
          onClick={() => {
            handleAddPost();
          }}
        />
      </RowRight>
    </Container>
  );
}
