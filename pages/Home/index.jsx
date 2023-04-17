import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { fetchPosts } from '../../actions/posts';
import SearchBar from '../../components/Search';
import { AddPost } from '../../components/AddPost';
import { PostsList } from '../../components/Post';
import { Container, Header, Content } from './styles';
export default function Home() {
  const { posts, next } = useSelector((state) => state.posts);
  const [isFetching] = useInfiniteScroll(handleLoadMore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts({ limit: 10, offset: 0 }));
  }, []);

  async function handleLoadMore(next) {
    dispatch(fetchPosts({ next }));
  }

  useEffect(() => {
    if (next) handleLoadMore();
  }, [next]);

  return (
    <>
      <Helmet>
        <title>CodeLeap - Home</title>
      </Helmet>
      <Container>
        <Header>
          <p>CodeLeap Network</p>
          <SearchBar />
        </Header>

        <Content>
          <AddPost />

          {posts.length > 0 ? (
            <PostsList posts={posts} />
          ) : (
            <p>This user has no posts yet</p>
          )}

          {isFetching && <p>Loading more posts...</p>}
        </Content>
      </Container>
    </>
  );
}
