import styled from 'styled-components/native';

export const TextContainer = styled.View`
  background-color: ${({ theme }) => theme.color.blue.medium};
`;

export const PiuInput = styled.TextInput`
  background-color: ${({ theme }) => theme.color.composition.divider};
`;

export const CharCounter = styled.Text`
  position: absolute;
`;

export const SendBtn = styled.TouchableOpacity`
  position: relative;
`;
