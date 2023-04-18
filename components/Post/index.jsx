import React, { useState } from 'react';
import { Post } from './components/post';
import { ModalComponent } from './components/modal';
import { loginService } from '../../services/login';
import { DeleteNotification } from './components/delete.notification';
import { EditPost } from './components/edit';
import { useDispatch } from 'react-redux';
import * as postsActions from '../../actions/posts';

export function PostsList({ posts }) {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState({
    title: '',
    content: '',
  });

  const dispatch = useDispatch();

  const user = loginService.isLogged();

  const handleEditClick = (post) => {
    setSelectedPost(post);
    setEditModalOpen(true);
  };

  const handleEditConfirm = async (post) => {
    try {
      dispatch(postsActions.updatePost(post));
      setSelectedPost({ title: '', content: '' });
      dispatch(postsActions.fetchPosts({ limit: 10, offset: 0, reset: true }));
    } catch (error) {
      console.error(error);
    } finally {
      setEditModalOpen(false);
    }
  };

  const handleEditCancel = () => {
    setEditModalOpen(false);
  };

  const handleDeleteClick = (post) => {
    setSelectedPost(post);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async (id) => {
    try {
      dispatch(postsActions.deletePost(id));
      setSelectedPost({ title: '', content: '' });
      dispatch(postsActions.fetchPosts({ limit: 10, offset: 0, reset: true }));
    } catch (error) {
      console.error(error);
    } finally {
      setDeleteModalOpen(false);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
  };

  const isOwner = (username) => {
    return user && user.username === username;
  };

  return (
    <>
      {posts.map((post, index) => (
        <Post
          content={post.content}
          createdDatetime={post.created_datetime}
          handleDeleteClick={() => handleDeleteClick(post)}
          handleEditClick={() => handleEditClick(post)}
          key={`${post.id}_${index}}`}
          owner={isOwner(post.username)}
          title={post.title}
          userName={post.username}
        />
      ))}
      {editModalOpen && (
        <ModalComponent isModalOpen={editModalOpen} higher={true}>
          <EditPost
            handleEditConfirm={handleEditConfirm}
            handleEditCancel={handleEditCancel}
            setSelectedPost={setSelectedPost}
            selectedPost={selectedPost}
          />
        </ModalComponent>
      )}
      {deleteModalOpen && (
        <ModalComponent isModalOpen={deleteModalOpen} higher={false}>
          <DeleteNotification
            handleDeleteConfirm={handleDeleteConfirm}
            handleDeleteCancel={handleDeleteCancel}
            selectedPost={selectedPost}
          />
        </ModalComponent>
      )}
    </>
  );
}
