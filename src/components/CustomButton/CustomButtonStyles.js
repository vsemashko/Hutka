import { Platform } from 'react-native';
import styled from 'styled-components/native';

import {
  colors, fontSizes, fontWeights,
} from 'src/styles';

export const StyledButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 22px;
  border: ${props => (props.disabled ? '0px' : '2px solid #414141')};
  border-radius: 5px;
  background-color: ${props => (props.disabled ? colors.BUTTON_DISABLE_COLOR : colors.PRIMARY_COLOR)};
`;

export const ButtonText = styled.Text`
  color: ${colors.WHITE_COLOR};
  font-family: ${Platform.select({ iOS: 'System', android: 'SF-Pro-Text-Semibold' })};
  font-weight: ${Platform.select({ iOS: fontWeights.FONT_WEIGHT_SEMIBOLD, android: 'normal' })};
  font-size: ${fontSizes.FONT_SIZE_S};
`;

export const ImageContainer = styled.Image`
  margin-right: 12;
`;
