import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { PiuInterface } from '../../interfaces';
import api from '../../services/api';

import {
  TextContainer, PiuInput, CharCounter, SendBtn,
} from './styles';

interface MakePostInterface {
  pius: PiuInterface[];
  setPius: React.Dispatch<React.SetStateAction<PiuInterface[]>>
}

const MakePost: React.FC<MakePostInterface> = ({ pius, setPius }) => {
  const { user } = useAuth();
  const [Count, setCount] = useState(0);
  const [Text, setText] = useState('');

  const handleUserInput = (str: string) => {
    setText(str);
    setCount(str.length);
  };

  const handleMakePost = async () => {
    const data = { text: Text };
    const response = await api.post('/pius', data);
    const responsePost: PiuInterface = { user, likes: [], ...response.data };
    setPius([responsePost, ...pius]);
  };

  return (
    <TextContainer>
      <PiuInput
        placeholder="Dê o seu piu..."
        value={Text}
        onChangeText={handleUserInput}
        multiline
        textAlignVertical="top"
        numberOfLines={8}
      />
      <CharCounter>{`${Count}/140`}</CharCounter>
      <SendBtn onPress={() => {
        handleMakePost();
      }}
      />
    </TextContainer>
  );
};

export default MakePost;
