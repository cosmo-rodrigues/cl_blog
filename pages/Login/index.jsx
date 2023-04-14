import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { loginService } from '../../services/login';

import { Input, RowRight, SubTitle, Title } from '../../style/globalStyles';
import Button from '../../components/Button';
import { Modal } from './styles';

export default function Login() {
  const [userName, setUserName] = useState('');

  function Login() {
    loginService.singUp(userName);
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
        <Link to={`/${userName}`} className={!userName ? 'disabled-link' : ''}>
          <Button
            title='Enter'
            color={!userName || userName.length < 3 ? 'disabled' : 'blue'}
            onClick={Login}
          />
        </Link>
      </RowRight>

      <p>users Online: </p>
      <ul>
        {loginService.getAllUsers().map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </Modal>
  );
}
