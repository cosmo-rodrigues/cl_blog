import styled from 'styled-components';

export const AnchorStyle = styled.a`
  color: white;
  cursor: pointer;
  font-size: 25px;
  margin: 10px;
  text-decoration: none;
`;

export const Container = styled.div`
  .c-green {
    background: ${({ theme }) => theme.COLORS.GREEN};
  }
  .c-red {
    background: ${({ theme }) => theme.COLORS.RED};
  }
  .c-blue {
    background: ${({ theme }) => theme.COLORS.BLUE};
  }
  .c-white {
    background: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BLACK};
  }
  .c-white-btn {
    background: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BLACK};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_MD};
  }
  .d-flex {
    display: flex;
  }
  .d-none {
    display: none;
  }

  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.div`
  width: 80vh;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  line-height: 26px;
  margin-bottom: 24px;
  max-width: 80%;
  word-wrap: break-word !important;

  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  line-height: 19px;
  margin-bottom: 8px;

  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  line-height: 21px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  word-wrap: break-word;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  margin-bottom: 16px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_DARK};
  border-radius: 8px;

  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  line-height: 16px;
  text-indent: 11.2px;

  ::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
`;

export const InputTextContent = styled.textarea`
  width: 100%;
  height: 74px;
  margin-bottom: 16px;
  padding-top: 7px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_DARK};
  border-radius: 8px;

  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  line-height: 16px;
  text-indent: 11.2px;
  resize: none;

  ::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
`;

export const RowRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;

export const Header = styled.header`
  position: fixed;
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 999;
`;

export const Navbar = styled.nav`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  color: white;
  display: flex;
  justify-content: center;
  height: 100%;
  text-decoration: none;
  width: 100%;
`;
