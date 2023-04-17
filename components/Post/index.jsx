import React, { useState } from 'react';
import { Post } from './components/post';
import { ModalComponent } from './components/modal';
import { loginService } from '../../services/login';
import { DeleteNotification } from './components/delete.notification';
import { AddEdit } from './components/add.edit';
import { useDispatch } from 'react-redux';
import { deletePost, fetchPosts } from '../../actions/posts';

export function PostsList({ posts }) {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    username: '',
    title: '',
    content: '',
  });

  const dispatch = useDispatch();

  const user = loginService.isLogged();

  function handleEditClick(card) {
    setSelectedCard(card);
    setEditModalOpen(true);
  }

  function handleEditConfirm() {
    // Save changes to the selected card
    setEditModalOpen(false);
  }

  function handleEditCancel() {
    // Save changes to the selected card
    setEditModalOpen(false);
  }

  function handleDeleteClick(card) {
    setSelectedCard(card);
    setDeleteModalOpen(true);
  }

  async function handleDeleteConfirm(id) {
    dispatch(deletePost(id));
    dispatch(fetchPosts({ limit: 10, offset: 0, reset: true }));
    setDeleteModalOpen(false);
  }

  function handleDeleteCancel() {
    setDeleteModalOpen(false);
  }

  function isOwner(username) {
    return user && user.username === username;
  }

  return (
    <>
      {posts.map((post, index) => (
        <Post
          content={post.content}
          createdDatetime={post.created_datetime}
          handleDeleteClick={() => handleDeleteClick(post)}
          handleEditClick={handleEditClick}
          key={`${post.id}_${index}}`}
          owner={isOwner(post.username)}
          title={post.title}
          userName={post.username}
        />
      ))}
      {editModalOpen && (
        <ModalComponent
          isModalOpen={editModalOpen}
          setIsModalOpen={setEditModalOpen}
        >
          <AddEdit
            handleEditConfirm={handleEditConfirm}
            handleEditCancel={handleEditCancel}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        </ModalComponent>
      )}
      {deleteModalOpen && (
        <ModalComponent
          isModalOpen={deleteModalOpen}
          setIsModalOpen={setDeleteModalOpen}
        >
          <DeleteNotification
            handleDeleteConfirm={handleDeleteConfirm}
            handleDeleteCancel={handleDeleteCancel}
            selectedCard={selectedCard}
          />
        </ModalComponent>
      )}
    </>
  );
}
