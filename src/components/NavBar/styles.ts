import styled from 'styled-components/native';

export const NavWrapper = styled.View`
  background-color: ${({ theme }) => theme.color.blue.dark};

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 64px;
`;

export const NavTouchable = styled.TouchableOpacity``;

export const IconBtn = styled.Image`
  color: ${({ theme }) => theme.color.composition.background};
  width: 48px;
  height: 48px;
`;
