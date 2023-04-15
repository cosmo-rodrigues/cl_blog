import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { fetchPosts } from '../../redux/reducers/posts';

import AddEditPost from '../../components/AddEditPost';
import Post from '../../components/Post';
import { Container, Header, Content } from './styles';
import SearchBar from '../../components/Search';
import { useURLParams } from '../../hooks/useURLParams';
export default function Home() {
  const { posts, next } = useSelector((state) => state.posts);
  const [isFetching] = useInfiniteScroll(handleLoadMore);
  const params = useURLParams();
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

          {posts.length > 0 ? (
            posts.map((post) => (
                <Post
                key={post.id}
                  content={post.content}
                  createdDatetime={post.created_datetime}
                  id={post.id}
                  title={post.title}
                  userName={post.username}
                  owner={params === post.username}
                />
            ))
          ) : (
            <p>This user has no posts yet</p>
          )}

          {isFetching && <p>Loading more posts...</p>}
        </Content>
      </Container>
    </>
  );
}
