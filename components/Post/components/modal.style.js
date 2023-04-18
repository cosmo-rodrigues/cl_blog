import styled from 'styled-components';

export const Modal = styled.div`
  backdrop-filter: blur(4px);
  background-color: white;
  border: 1px solid #999999;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  left: 50%;
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
  height: ${({ higher }) => (higher ? '334px' : '146px')};
  z-index: 100;
  width: 630px;

  margin-left: 0 auto;

  @media (max-width: 1023px) {
    left: 45%;
    width: 80%;
  }

  @media (max-width: 767px) {
    left: 43%;
    width: 80%;
  }
`;

export const BlurredBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(119, 119, 119, 0.8);
  backdrop-filter: blur(4px);
  z-index: 50;
`;
