import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_MD};
    border-radius: 16px;
    padding: 24px;
    position: relative;
`;