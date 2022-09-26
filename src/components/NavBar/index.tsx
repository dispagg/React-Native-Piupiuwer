import ImgRound from '../ImgRound';
import { IconBtn, NavTouchable, NavWrapper } from './styles';

import homeBtn from '../../assets/House_01.png';
import searchBtn from '../../assets/Search_Magnifying_Glass.png';
import { useAuth } from '../../hooks/useAuth';

const NavBar = () => {
  const { user } = useAuth();
  return (
    <NavWrapper>
      <NavTouchable>
        <IconBtn source={searchBtn} />
      </NavTouchable>
      <NavTouchable>
        <IconBtn source={homeBtn} />
      </NavTouchable>
      <NavTouchable>
        <ImgRound source={{ uri: user?.photo }} size="48px" />
      </NavTouchable>
    </NavWrapper>
  );
};

export default NavBar;
