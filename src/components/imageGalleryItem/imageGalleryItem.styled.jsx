import styled from 'styled-components';

export const GalleryItem = styled.li`
  display: block;
  flex-flow: column;
  flex-wrap: wrap;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 350px;
  height: 250px;
  border-radius: 2px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
`;

export const ImageItem = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 5px;

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  }
`;
