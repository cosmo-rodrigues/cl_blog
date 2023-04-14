import styled from "styled-components";

export const ContentButton = styled.button`
  border-radius: 8px;
  width: 111px;
  height: 32px;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-style: normal;
  font-weight: 700;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  line-height: 19px;
  transition: 0.3s;
  cursor: pointer;

    &:hover {
      opacity: 0.9;
  }
`;