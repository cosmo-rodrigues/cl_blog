import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsAsync, loadMorePosts } from './redux/reducers/posts';
import useInfiniteScroll from './hooks/useInfiniteScroll';



function Post() {
  const dispatch = useDispatch();
  const { status, error, posts, next } = useSelector((state) => state.posts);

  const handleLoadMore = async () => {
    if (next) {
      dispatch(loadMorePosts(next));
    }
    setIsFetching(false);
  };

  const [isFetching, setIsFetching] = useInfiniteScroll(handleLoadMore);

  useEffect(() => {
    dispatch(fetchPostsAsync({limit: 10, offset: 0}));
  }, [dispatch]);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' && (
        <>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
          {isFetching && <p>Loading more posts...</p>}
        </>
      )}
    </div>
  );

}

export default Post
