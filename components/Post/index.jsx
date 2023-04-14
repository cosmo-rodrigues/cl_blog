import React, { useState } from 'react'
import { RowRight, Text, Title } from '../../style/globalStyles'
import IconEdit from '../../assets/edit.svg'
import IconDelete from '../../assets/delete.svg'
import AddEditPost from '../AddEditPost'
import Button from '../Button'

import {
  Container,
  Header,
  Content,
  Info,
  Icons,
} from './styles'
import { useDispatch, useSelector } from 'react-redux'

export default function Post({
  title,
  info = true,
  text,
  userName,
  time,
  onClickDel,
  description
}) {

  const [modalDel, setModalDel] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModalDelete = () => {
    setModalDel(!modalDel)
    console.log(modalDel)
  }

  const handleOpenModalEdit = () => {
    setModalEdit(!modalEdit)
    console.log(modalEdit)
  }

  const handleOpenModal = () => {
    setOpenModal(!openModal)
    setModalDel(false)
    setModalEdit(false)
    console.log(openModal)
  }

  const posts = useSelector((state) => state.posts.items)
  const dispatch = useDispatch();
  return (
    <Container>

        <Header>
          <Title>{title}</Title>

          <Icons className={info ? '' : 'display-none'}>
            <img src={IconDelete} alt="" onClick={handleOpenModalDelete} />
            <img src={IconEdit} alt="" onClick={handleOpenModalEdit} />
          </Icons>
        </Header>

        <Content>
          <Info>
            <p>{userName}</p>
            <p>{time}</p>
          </Info>

          <Text>
            {description}
          </Text>
        </Content>

    
    </Container>
  )
}