import styled from 'styled-components/native';

export const TextContainer = styled.View`
  background-color: ${({ theme }) => theme.color.blue.medium};
  padding: 16px;
  flex-direction: row;
  align-items: center;
`;

export const PiuInput = styled.TextInput`
  background-color: ${({ theme }) => theme.color.composition.background};
  border-radius: 16px;
  height: 150px;
  flex: 1;
  margin-right: 24px;
  font-family: 'Poppins';
  padding: 16px;
  padding-right: 48px;
`;

export const CharCounter = styled.Text`
  position: absolute;
  bottom: 24px;
  right: 56px;
`;

export const SendBtn = styled.TouchableOpacity`
  height: 64px;
  width: 64px;
  background-color: ${({ theme }) => theme.color.fuchsia.dark};
  border-radius: 100px;
  position: absolute;
  right: 12px;
`;
