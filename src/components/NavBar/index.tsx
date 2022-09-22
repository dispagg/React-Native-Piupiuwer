import ImgRound from '../ImgRound';
import { IconBtn, NavTouchable, NavWrapper } from './styles';

import homeBtn from '../../assets/House_01.png';
import searchBtn from '../../assets/Search_Magnifying_Glass.png';
import user from '../../assets/User.png';

const NavBar = () => (
  <NavWrapper>
    <NavTouchable>
      <IconBtn source={searchBtn} />
    </NavTouchable>
    <NavTouchable>
      <IconBtn source={homeBtn} />
    </NavTouchable>
    <NavTouchable>
      <ImgRound source={user} size="48px" />
    </NavTouchable>
  </NavWrapper>
);

export default NavBar;
