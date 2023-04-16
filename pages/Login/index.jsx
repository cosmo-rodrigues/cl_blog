import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { loginService } from '../../services/login';
import { fetchPosts } from '../../redux/reducers/posts';

import { Input, RowRight, SubTitle, Title } from '../../style/globalStyles';
import Button from '../../components/Button';
import { List, Modal } from './styles';
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

  return (
    <Modal>
      <Helmet>
        <title>CodeLeap - Login</title>
      </Helmet>
      <Title>Welcome to CodeLeap network!</Title>
      <SubTitle>Please enter your username</SubTitle>

      <Input
        placeholder='Jhon doe'
        type='email'
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />

      <RowRight>
        <Button
          title='Enter'
          color={!userName || userName.length < 3 ? 'disabled' : 'blue'}
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
