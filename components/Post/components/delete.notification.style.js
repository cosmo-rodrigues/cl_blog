import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 146px;
  justify-content: space-between;
  padding: 20px;
`;

export const ButtonsContainer = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  width: 40%;
`;

export const ButtonCancel = styled.button`
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 8px;
  height: 32px;
  width: 120px;
`;

export const ButtonDelete = styled.button`
  background: #ff5151;
  border-radius: 8px;
  border: 1px solid #ff5151;
  height: 32px;
  margin-left: 5px;
  width: 120px;
`;

export const Text = styled.p`
  align-self: flex-start;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
`;
