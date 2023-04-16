import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};
  margin: 20vh auto;
  width: 95%;
  position: relative;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Header = styled.div`
  background: ${({ theme }) => theme.COLORS.BLUE};
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;

  p {
    font-style: normal;
    font-weight: 700;
    font-size: ${({ theme }) => theme.FONT_SIZE.XL};
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-left: 37px;
  }
`;
