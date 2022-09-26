import React from 'react';
import { RoundImage } from './styles';

interface ImgInterface {
  source: string | { uri?: string };
  size: string;
}

const ImgRound: React.FC<ImgInterface> = ({ source, size }) => (
  <RoundImage source={source} size={size} />
);

export default ImgRound;
