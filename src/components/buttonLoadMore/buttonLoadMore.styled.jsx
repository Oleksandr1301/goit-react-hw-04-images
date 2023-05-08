import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
   background-color: #a9eee4;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  display: block;
 justify-content: center;
  padding: 10px 28px;
  color: #000;
  height: 34px;
  border: none;
  border-radius: 4px;
  
}
  &:hover {
    background-color: #248a8d;
    transform: scale(1.03);
  }`;
