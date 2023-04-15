import React, { useState } from 'react';
import { Container, Search, SearchTerm, SearchButton } from './style';
import { fetchPosts, fetchPostsByUserName } from '../../redux/reducers/posts';
import { useDispatch } from 'react-redux';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  function handdleToggle(e) {
    e.preventDefault();

    try {
      if (!toggle) {
        dispatch(fetchPostsByUserName({ username: searchTerm }));
      } else {
        dispatch(fetchPosts({ limit: 10, offset: 0 }));
        setSearchTerm('');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setToggle(!toggle);
    }
  }

  return (
    <>
      <Container>
        <Search>
          <SearchTerm
            type='text'
            value={searchTerm}
            placeholder='Find posts by username...'
            onChange={({ target }) => handleSearch(target.value)}
          />
          {toggle ? (
            <SearchButton type='submit' onClick={handdleToggle}>
              &#10060;
            </SearchButton>
          ) : (
            <SearchButton type='submit' onClick={handdleToggle}>
              &#128270;
            </SearchButton>
          )}
        </Search>
      </Container>
    </>
  );
}

export default SearchBar;
