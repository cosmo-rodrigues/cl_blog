import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, RowRight, SubTitle, Title } from '../../style/globalStyles';
import Button from '../../components/Button';
import {
  Modal,
} from './styles'

export default function Login() {
  const [userName, setUserName] = useState('');

  return (
    <Modal>
      <Title>Welcome to CodeLeap network!</Title>
      <SubTitle>Please enter your username</SubTitle>

      <Input
        placeholder='Jhon doe'
        type="email"
        value={userName}
        onChange={event => setUserName(event.target.value)}
      />

      <RowRight>
        <Link
          to={userName === 'jana' ? '/' : '#'}
          className={!userName ? 'disabled-link' : ''}
        >
          <Button 
            title='Enter' 
            color={!userName || userName.length < 3 ? 'disabled' : 'blue'} 
          />
        </Link>
      </RowRight>

      <p>users Online: </p>
    </Modal>
  )
}
