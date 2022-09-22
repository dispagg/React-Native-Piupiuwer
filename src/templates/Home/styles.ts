import styled from 'styled-components/native';

export const HeaderWrapper = styled.View`
  align-items: center;
  justify-content: center;

  border-bottom-color: ${({ theme }) => theme.color.blue.medium};
  border-bottom-width: 2px;

  padding: 16px;
  margin-bottom: 8px;
`;

export const BodyView = styled.ScrollView`
  flex: 1;
`;

export const PiuContainer = styled.View`
  padding: 8px;
`;

export const LogoImg = styled.Image`
  height: 37px;
  width: 48px;
`;
