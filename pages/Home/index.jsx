import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { fetchPosts } from '../../redux/reducers/posts';

import AddEditPost from '../../components/AddEditPost';
import Post from '../../components/Post';
import { Container, Header, Content } from './styles';
import SearchBar from '../../components/Search';

export default function Home() {
  const { posts, next } = useSelector((state) => state.posts);
  const [isFetching] = useInfiniteScroll(handleLoadMore);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFetching) dispatch(fetchPosts({ limit: 10, offset: 0 }));
  }, [dispatch]);

  async function handleLoadMore() {
    if (next) {
      dispatch(fetchPosts({ next }));
    }
  }

  return (
    <>
      <Helmet>
        <title>CodeLeap - Home</title>
      </Helmet>
      <SearchBar />
      <Container>
        <Header>
          <p>CodeLeap Network</p>
        </Header>

        <Content>
          <AddEditPost />

          {posts.map((post) => (
            <div key={`${post.id}-${new Date().getMilliseconds()}`}>
              <Post title={post.title} description={post.content} />
            </div>
          ))}

          {isFetching && <p>Loading more posts...</p>}
        </Content>
      </Container>
    </>
  );
}
