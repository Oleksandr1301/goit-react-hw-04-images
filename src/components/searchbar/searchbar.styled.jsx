import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  padding: 18px;
  font-size: 18px;
  display: flex;

  gap: 5px;
  margin: 0 auto 30px auto;
`;

export const Field = styled.input`
  border-radius: 5px;
  border: 1px solid #000;
  padding: 5px;
`;

export const ButtonSearch = styled.button`
  width: 90px;
  margin-left: 40px;
  padding: 5px 0 5px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #000;
  cursor: pointer;
  background-color: #a9eee4;
  margin: 0 auto;
  &:hover {
    scale: 1.03;
    background-color: #248a8d;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  }
`;
