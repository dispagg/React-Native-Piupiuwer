import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  padding: 16px;

  flex-direction: column;
  justify-content: center;
`;

export const LogInWrapper = styled.View`
  background-color: rgba(255, 255, 255, 0.2);
  margin-top: 24px;
  padding: 16px;
  border-radius: 16px;
  align-items: center;
`;

export const UserInput = styled.TextInput`
  height: 56px;
  width: 100%;
  margin-bottom: 16px;

  background-color: ${({ theme }) => theme.color.composition.background};
  border-radius: 16px;
  align-items: center;
  padding-left: 16px;

  font-size: 14px;
  font-family: 'Poppins';
`;

export const LogInButton = styled.TouchableOpacity`
  width: 220px;
  height: 48px;

  background-color: ${({ theme }) => theme.color.fuchsia.dark};
  border-radius: 1000px;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled.Text`
  font-family: 'PoppinsBold';
  color: white;
  font-size: 18px;
`;
