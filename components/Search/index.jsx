import React, { useState } from 'react';
import { Container, Search, SearchTerm, SearchButton } from './style';
import { fetchPosts, fetchPostsByUserName } from '../../actions/posts';
import { useDispatch } from 'react-redux';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [toggle, setToggle] = useState(true);

  const dispatch = useDispatch();

  const handleSearch = (value) => {
    setSearchTerm(value);
    setToggle(true);
  };

  function handdleToggle(e) {
    e.preventDefault();

    try {
      if (toggle) {
        dispatch(fetchPostsByUserName({ username: searchTerm }));
      } else {
        dispatch(fetchPosts({ limit: 10, offset: 0 }));
        setSearchTerm('');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setToggle(!toggle);
    }
  }

  return (
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
            &#128270;
          </SearchButton>
        ) : (
          <SearchButton type='submit' onClick={handdleToggle}>
            &#10060;
          </SearchButton>
        )}
      </Search>
    </Container>
  );
}

export default SearchBar;
