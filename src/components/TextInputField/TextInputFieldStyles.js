import { Platform } from 'react-native';
import styled from 'styled-components/native';

import { colors, fontWeights, fontSizes } from 'src/styles';

export const TextInputContainer = styled.View`
  flex-direction: row;
  border-width: 1;
  border-color: ${props => (props.errorState ? colors.ERROR_COLOR : colors.PRIMARY_COLOR)};
  border-radius: 4;
`;

export const StyledTextInput = styled.TextInput`
  padding: 12px 16px 12px 10px;
  flex: 1;
  color: ${colors.PRIMARY_TEXT_COLOR};
  font-family: ${Platform.select({ iOS: 'System', android: 'SF-Pro-Text-Medium' })};
  font-weight: ${Platform.select({ iOS: fontWeights.FONT_WEIGHT_MEDIUM, android: 'normal' })};
  font-size: ${fontSizes.FONT_SIZE_S};
  line-height: 24;
`;

export const PhoneNumberPart = styled.View`
  padding-left: 16px;
  flex-direction: row;
  align-items: center;
`;

export const FlagImage = styled.Image`

`;

export const PhoneNumberText = styled.Text`
  padding-left: 12px;
  color: ${colors.CAPTION_TEXT_COLOR};
  font-family: ${Platform.select({ iOS: 'System', android: 'SF-Pro-Text-Medium' })};
  font-weight: ${Platform.select({ iOS: fontWeights.FONT_WEIGHT_MEDIUM, android: 'normal' })};
  font-size: ${fontSizes.FONT_SIZE_S};
  line-height: 24;
`;
