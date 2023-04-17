import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
`;

export const Title = styled.div`
  align-self: flex-start;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
`;
export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
  margin: 10px 0;
  min-height: 90px;
  width: 100%;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PostLabel = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
`;

export const PostInput = styled.input`
  background: #ffffff;
  border: 1px solid #777777;
  border-radius: 8px;
  padding: 10px;
`;

export const Textarea = styled.textarea`
  background: #ffffff;
  border: 1px solid #777777;
  border-radius: 8px;
  height: 100px;
  padding: 15px;
`;

export const ButtonCancel = styled.button`
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 8px;
  height: 32px;
  width: 120px;
`;

export const ButtonSave = styled.button`
  background: #ffffff;
  border: 1px solid #47b960;
  background-color: #47b960;
  border-radius: 8px;
  height: 32px;
  width: 120px;
`;

export const ButtonsContainer = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  min-width: 40%;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 50%;
  }
`;
