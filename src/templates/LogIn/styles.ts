import styled from 'styled-components/native';

import background from '../../assets/Gradient.png';

export const Wrapper = styled.View`
  background-image: ${background};
  flex: 1;
`;

export const LogInWrapper = styled.View``;

export const UserInput = styled.TextInput`
  height: 56px;
  width: 100%;

  background-color: ${({ theme }) => theme.color.composition.background};
  padding: 24px;
  border-radius: 16px;

  font-size: 14px;
  font-family: 'Poppins';
`;

export const LogInButton = styled.TouchableOpacity``;
