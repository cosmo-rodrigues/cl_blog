import React, { useState } from 'react';
import { RowRight, Text, Title } from '../../style/globalStyles';
import IconEdit from '../../assets/edit.svg';
import IconDelete from '../../assets/delete.svg';
import AddEditPost from '../AddEditPost';
import Button from '../Button';

import { Container, Header, Content, Info, Icons } from './styles';
import { useDispatch, useSelector } from 'react-redux';

export default function Post({
  content,
  createdDatetime,
  id,
  title,
  userName,
  owner,
}) {
  const [modalDel, setModalDel] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModalDelete = () => {
    setModalDel(!modalDel);
    console.log(modalDel);
  };

  const handleOpenModalEdit = () => {
    setModalEdit(!modalEdit);
    console.log(modalEdit);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
    setModalDel(false);
    setModalEdit(false);
    console.log(openModal);
  };

  function formatPostTime(postTime) {
    const now = new Date();
    const elapsedMilliseconds = now - new Date(postTime);

    const elapsedMinutes = Math.floor(elapsedMilliseconds / (1000 * 60));
    if (elapsedMinutes < 60) {
      return `${elapsedMinutes} minute${elapsedMinutes === 1 ? '' : 's'} ago`;
    }

    const elapsedHours = Math.floor(elapsedMinutes / 60);
    return `${elapsedHours} hour${elapsedHours === 1 ? '' : 's'} ago`;
  }

  const posts = useSelector((state) => state.posts.items);
  const dispatch = useDispatch();
  return (
    <Container>
      <Header>
        <Title>{title}</Title>

        <Icons className={owner ? '' : 'display-none'}>
          <img src={IconDelete} alt='' onClick={handleOpenModalDelete} />
          <img src={IconEdit} alt='' onClick={handleOpenModalEdit} />
        </Icons>
      </Header>

      <Content>
        <Info>
          <p>{userName}</p>
          <p>{formatPostTime(createdDatetime)}</p>
        </Info>

        <Text>{content}</Text>
      </Content>
    </Container>
  );
}
