import React, { useState } from 'react';
import { Post } from './components/post';
import { ModalComponent } from './components/modal';
import { loginService } from '../../services/login';

export function PostsList({ posts }) {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    username: '',
    title: '',
    content: '',
  });

  const user = loginService.isLogged();

  const handleEditClick = (card) => {
    setSelectedCard(card);
    setEditModalOpen(true);
  };

  const handleSaveClick = () => {
    // Save changes to the selected card
    setEditModalOpen(false);
  };

  const handleDeleteClick = (card) => {
    setSelectedCard(card);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    // Delete the selected card
    setDeleteModalOpen(false);
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
  };

  function isOwner(username) {
    return user && user.username === username;
  }

  return (
    <>
      {posts.map((post, index) => (
        <Post
          content={post.content}
          createdDatetime={post.created_datetime}
          handleDeleteClick={handleDeleteClick}
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
          <input
            value={selectedCard.title}
            onChange={(e) =>
              setSelectedCard({ ...selectedCard, title: e.target.value })
            }
          />
          <textarea
            value={selectedCard.content}
            onChange={(e) =>
              setSelectedCard({ ...selectedCard, content: e.target.value })
            }
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={() => setEditModalOpen(false)}>Cancel</button>
        </ModalComponent>
      )}
      {deleteModalOpen && (
        <ModalComponent
          isModalOpen={deleteModalOpen}
          setIsModalOpen={setDeleteModalOpen}
        >
          <p>Are you sure you want to delete this card?</p>
          <button onClick={handleDeleteConfirm}>Delete</button>
          <button onClick={handleDeleteCancel}>Cancel</button>
        </ModalComponent>
      )}
    </>
  );
}
