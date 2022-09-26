import React from 'react';
import { StatusBar } from 'react-native';

import NavBar from '../../components/NavBar';
import ViewPost from '../../components/ViewPost';

import Logo from '../../assets/Logo_Home.png';
import {
  BodyView, HeaderWrapper, LogoImg, PiuContainer,
} from './styles';
import { PiuInterface } from '../../interfaces';
import MakePost from '../../components/MakePost';

interface HomeInterface {
  pius: PiuInterface[]
  setPius: React.Dispatch<React.SetStateAction<PiuInterface[]>>
}

const Home: React.FC<HomeInterface> = ({ pius, setPius }) => (

  <>
    <StatusBar />
    <BodyView>
      <HeaderWrapper>
        <LogoImg source={Logo} />
      </HeaderWrapper>
      <MakePost pius={pius} setPius={setPius} />
      <PiuContainer>
        {pius.map((piu) => (
          <ViewPost
            user={piu.user}
            created_at={piu.created_at}
            text={piu.text}
            likes={piu.likes}
            id={piu.id}
            key={piu.id}
          />
        ))}
      </PiuContainer>
    </BodyView>
    <NavBar />
  </>

);

export default Home;
