import styled from 'styled-components';

export const Search = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const SearchTerm = styled.input`
  width: 100%;
  border: 3px solid ${({ theme }) => theme.COLORS.BLUE};
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;

  :focus {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
  background: ${({ theme }) => theme.COLORS.BLUE};
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
`;

export const Container = styled.div`
  width: 20%;
  position: fixed;
  top: 79px;
  left: 10%;
  transform: translate(-50%, -50%);

  @media (max-width: 1023px) {
    left: 50%;
    position: fixed;
    width: 100%;
  }
`;
