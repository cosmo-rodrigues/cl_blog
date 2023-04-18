import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { loginService } from '../../services/login';
import { fetchPosts } from '../../actions/posts';

import { RowRight, SubTitle } from '../../style/globalStyles';
import Button from '../../components/Button';
import {
  ErrorMessage,
  InputContainer,
  InputField,
  List,
  Modal,
  Title,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

export default function Login() {
  const { posts, next } = useSelector((state) => state.posts);
  const [userName, setUserName] = useState('');
  const [_isFetching] = useInfiniteScroll(handleLoadMore);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts({ limit: 10, offset: 0 }));
  }, []);

  async function handleLoadMore() {
    if (next) {
      dispatch(fetchPosts({ next }));
    }
  }

  function removeExtraSpacesAndJoin(string) {
    string = string.trim();
    string = string.replace(/\s+/g, ' ');
    string = string.replace(/\s/g, '');
    return string;
  }

  const uniqueUsernames = [...new Set(posts.map((post) => post.username))];

  function Login() {
    const userNameWithoutSpaces = removeExtraSpacesAndJoin(userName);
    const result = loginService.login(userNameWithoutSpaces);

    if (result.status === 'success') {
      navigate(`/${userNameWithoutSpaces}`);
    } else {
      loginService.singUp(userNameWithoutSpaces);
      navigate(`/${userNameWithoutSpaces}`);
    }
  }

  function validateUserName() {
    const valide = userName.length >= 3;
    if (valide) return { isValid: true, message: '' };
    return {
      isValid: false,
      message: 'Username must be at least 3 characters',
    };
  }

  return (
    <Modal>
      <Helmet>
        <title>CodeLeap - Login</title>
      </Helmet>
      <Title>Welcome to CodeLeap network!</Title>
      <SubTitle>Please enter your username</SubTitle>

      <InputContainer>
        <InputField
          value={userName}
          isValid={validateUserName().isValid}
          onChange={(event) => setUserName(event.target.value)}
        />
        {!validateUserName().isValid && (
          <ErrorMessage>{validateUserName().message}</ErrorMessage>
        )}
      </InputContainer>

      <RowRight>
        <Button
          title='Enter'
          color={validateUserName().isValid ? 'blue' : 'disabled'}
          onClick={Login}
        />
      </RowRight>

      <p>online users: </p>
      <List>
        {uniqueUsernames.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </List>
    </Modal>
  );
}
