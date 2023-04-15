import styled from 'styled-components';

export const Modal = styled.div`
  width: 500px;
  background: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY};
  border-radius: 16px;

  padding: 24px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  a {
    text-decoration: none;
  }
  .disabled-link {
    pointer-events: none;
  }
  a .btn-color {
    background: ${({ theme }) => theme.COLORS.BLUE};
    cursor: pointer;
  }

  a .disabled {
    background: ${({ theme }) => theme.COLORS.GRAY};
  }
`;

export const List = styled.ul`
  align-items: center;
  color: green;
  display: flex;
  list-style: none !important;
  flex-direction: column;

  li {
    color: green;
  }
   
   li::before {
    content: "\2022";
    font-weight: bold;
    display: inline-block; 
    width: 1em;
    margin-left: -1em;
  }
`;

// export const ListItem = styled.li`
//   ::before {
//     content: "\2022";
//     color: red;
//     font-weight: bold;
//     display: inline-block; 
//     width: 1em;
//     margin-left: -1em;
//   }
// `
