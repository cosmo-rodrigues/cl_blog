import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { fetchPosts } from '../../redux/reducers/posts';

import AddEditPost from '../../components/AddEditPost';
import Post from '../../components/Post';
import { Container, Header, Content } from './styles';

export default function Home() {
  const { status, error, posts, next } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleLoadMore = async () => {
    if (next) {
      dispatch(fetchPosts({ next }));
    }
  };

  const [isFetching] = useInfiniteScroll(handleLoadMore);

  useEffect(() => {
    if (!isFetching) dispatch(fetchPosts({ limit: 10, offset: 0 }));
  }, [dispatch]);

  const [updateTitle, setUpdateTitle] = useState('');
  const [updateDescription, setUpdateDescription] = useState('');

  return (
    <Container>
      <Helmet>
        <title>CodeLeap - Home</title>
      </Helmet>
      <Header>
        <p>CodeLeap Network</p>
      </Header>

      <Content>
        <AddEditPost />

        {posts.length > 0
          ? posts.map((post) => (
              <div key={`${post.id}_${post.created_datetime}`}>
                <Post
                  title={post.title}
                  description={post.content}
                  // iconDel={}
                  // iconEdit={}
                />
              </div>
            ))
          : 'nothing here'}

        {isFetching && <p>Loading more posts...</p>}
      </Content>
    </Container>
  );
}
