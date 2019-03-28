import { Platform } from 'react-native';
import styled from 'styled-components/native';

import {
  fontWeights, fontSizes, colors, margins,
} from 'src/styles';

export const SignInContainer = styled.View`
  flex: 1;
`;

export const ImageContainer = styled.View`
  align-items: center;
`;

export const LogoWithBike = styled.Image`
  margin-top: ${margins.MARGIN_M};
`;

export const TextInputWrapper = styled.View`
  margin-top: ${margins.MARGIN_XL};
  margin-right: ${margins.MARGIN_XXL};
  margin-left: ${margins.MARGIN_XXL};
`;

export const TextInputTitle = styled.Text`
  margin-bottom: ${margins.MARGIN_XXS}px;
  color: ${colors.PRIMARY_TEXT_COLOR};
  font-family: ${Platform.select({ iOS: 'System', android: 'SF-Pro-Text-Medium' })};
  font-weight: ${Platform.select({ iOS: fontWeights.FONT_WEIGHT_MEDIUM, android: 'normal' })};
  font-size: ${fontSizes.FONT_SIZE_S};
`;

export const TextInputFieldWrapper = styled.View`
  margin-bottom: ${margins.MARGIN_XS};
`;

export const SignInCaption = styled.Text`
  margin-bottom: ${margins.MARGIN_L};
  color: ${colors.CAPTION_TEXT_COLOR};
  font-family: ${Platform.select({ iOS: 'System', android: 'SF-Pro-Text-Medium' })};
  font-weight: ${Platform.select({ iOS: fontWeights.FONT_WEIGHT_MEDIUM, android: 'normal' })};
  font-size: ${fontSizes.FONT_SIZE_XXS};
`;

export const CustomButtonWrapper = styled.View`
  align-items: center;
`;

export const TextError = styled.Text`
  margin: 4px 0;
  color: ${colors.ERROR_COLOR};
  font-family: ${Platform.select({ iOS: 'System', android: 'SF-Pro-Text-Medium' })};
  font-weight: ${Platform.select({ iOS: fontWeights.FONT_WEIGHT_MEDIUM, android: 'normal' })};
  font-size: ${fontSizes.FONT_SIZE_XXS};
`;
