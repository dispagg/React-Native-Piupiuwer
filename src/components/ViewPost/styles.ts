import styled from 'styled-components/native';

export const PostContainer = styled.View`
  width: 100%;

  border-radius: 16px;

  background-color: ${({ theme }) => theme.color.blue.light};
  margin-bottom: 16px;
`;

export const UserContainer = styled.View`
  padding: 16px;
  flex-direction: row;
  align-items: center;
`;

export const UserInfo = styled.View`
  padding-left: 16px;
  flex: 1;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.color.emphasis.medium};
  font-family: 'PoppinsBold';
`;

export const CreatedAt = styled.Text`
  font-family: 'Poppins';
  color: ${({ theme }) => theme.color.emphasis.medium};
`;

export const TextContainer = styled.Text`
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  padding: 16px;
  flex: 1;

  background-color: ${({ theme }) => theme.color.composition.divider};

  color: ${({ theme }) => theme.color.emphasis.medium};
  font-family: 'Poppins';
`;

export const LikeBtn = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const LikeImg = styled.Image`
  width: 24px;
  height: 24px;
`;

export const LikeText = styled.Text`
  font-family: 'Poppins';
  color: ${({ theme }) => theme.color.emphasis.medium};
  padding-top: 4px;
`;
