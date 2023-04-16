import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { fetchPosts } from '../../redux/reducers/posts';
import SearchBar from '../../components/Search';
import AddEditPost from '../../components/AddEditPost';
import { PostsList } from '../../components/Post';
import { Container, Header, Content } from './styles';
import { useURLParams } from '../../hooks/useURLParams';
export default function Home() {
  const { posts, next } = useSelector((state) => state.posts);
  const [isFetching] = useInfiniteScroll(handleLoadMore);
  const username = useURLParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts({ limit: 10, offset: 0 }));
  }, []);

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
      <Container>
        <Header>
          <p>CodeLeap Network</p>
          <SearchBar />
        </Header>

        <Content>
          <AddEditPost />

          {posts.length > 0 ? (
            <PostsList posts={posts} owner={username}/>
          ) : (
            <p>This user has no posts yet</p>
          )}

          {isFetching && <p>Loading more posts...</p>}
        </Content>
      </Container>
    </>
  );
}
