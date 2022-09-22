/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';

interface ImgInterface {
  size: string;
}

export const RoundImage = styled.Image<ImgInterface>`
  width: ${({ size }) => size};
  aspect-ratio: 1;

  border-radius: 24px;
`;
