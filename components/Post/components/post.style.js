import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_MD};
  border-radius: 16px;
`;

export const Header = styled.div`
  padding: 24px;
  border-radius: 16px 16px 0px 0px;
  background: ${({ theme }) => theme.COLORS.BLUE};

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 0;
  }

  .display-none {
    display: none;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;

  img {
    transition: 0.3s;
    cursor: pointer;
  }

  img:hover {
    opacity: 0.8;
  }
`;

export const Content = styled.div`
  padding: 24px;
`;

export const Info = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  width: 100%;

  p {
    font-weight: 400;
    line-height: 21px;
    font-size: ${({ theme }) => theme.FONT_SIZE.LG};
    color: ${({ theme }) => theme.COLORS.GRAY_DARK};
    overflow: hidden;
    max-width: 70%;
  }
  p:first-child {
    font-weight: 700;
  }
`;
