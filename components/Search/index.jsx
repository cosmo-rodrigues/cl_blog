import React from "react";
import { Container, Search, SearchTerm, SearchButton } from './style';

function SearchBar() {
  return (
    <>
      <Container>
        <Search>
          <SearchTerm
            type="text"
            placeholder="What are you looking for?"
          />
          <SearchButton type="submit">
            &#128270;
          </SearchButton>
        </Search>
      </Container>
    </>
  );
}

export default SearchBar;
