import styled from 'styled-components';

export const AnchorStyle = {
  color: "white",
  textDecoration: "none",
  margin: "10px",
  fontSize: "25px",
}

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
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  line-height: 26px;
  margin-bottom: 24px;

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

export const Navbar = styled.nav`
  margin-bottom: 10px;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
`;
