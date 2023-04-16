import React, { useState } from 'react';
import { RowRight, Text, Title } from '../../../style/globalStyles';
import IconEdit from '../../../assets/edit.svg';
import IconDelete from '../../../assets/delete.svg';

import {
  Container,
  Header,
  Content,
  Info,
  Icons,
} from './../components/post.style';

export function Post({
  content,
  createdDatetime,
  handleDeleteClick,
  handleEditClick,
  owner,
  title,
  userName,
}) {
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

  return (
    <Container>
      <Header>
        <Title>{title}</Title>

        <Icons className={owner === userName ? '' : 'display-none'}>
          <img src={IconDelete} alt='' onClick={handleDeleteClick} />
          <img src={IconEdit} alt='' onClick={handleEditClick} />
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
