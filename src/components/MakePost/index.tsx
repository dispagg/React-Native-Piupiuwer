import React, { useState } from 'react';

import {
  TextContainer, PiuInput, CharCounter, SendBtn,
} from './styles';

const MakePost = () => {
  const [Count, setCount] = useState(0);
  const [Text, setText] = useState('');

  const handleUserInput = (str: string) => {
    setText(str);
    setCount(str.length);
  };

  return (
    <TextContainer>
      <PiuInput placeholder="Dê o seu piu..." value={Text} onChangeText={handleUserInput}>
        <CharCounter>{`${Count}/140`}</CharCounter>
        <SendBtn />
      </PiuInput>
    </TextContainer>
  );
};

export default MakePost;
