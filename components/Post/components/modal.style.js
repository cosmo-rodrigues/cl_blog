import styled from 'styled-components';

export const Modal = styled.div`
  backdrop-filter: blur(4px);
  background-color: white;
  border: 1px solid #999999;
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
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
