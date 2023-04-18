import styled from 'styled-components';

export const Modal = styled.div`
  max-width: 660px;
  background: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY};
  border-radius: 16px;

  padding: 24px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;

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

  @media (max-width: 768px) {
    padding: 10% 30%;
    width: 100%;
  }
`;

export const List = styled.ul`
  align-items: flex-start;
  color: green;
  display: flex;
  flex-direction: column;

  li {
    max-width: 50%;
    word-wrap: break-word;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 90%;
`;

export const InputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const InputField = styled.input`
  height: 32px;
  margin-bottom: 16px;
  width: 100%;

  border: 1px solid
    ${({ theme, isValid }) =>
      isValid ? theme.COLORS.GRAY_DARK : theme.COLORS.RED};
  border-radius: 8px;

  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  line-height: 16px;
  text-indent: 11.2px;

  ::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
  padding: 0.5rem;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
`;
