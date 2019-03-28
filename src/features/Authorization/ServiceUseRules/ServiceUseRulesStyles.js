import { Platform } from 'react-native';
import styled from 'styled-components/native';

import {
  fontWeights, fontSizes, colors, margins,
} from 'src/styles';

export const ServiceUserRulesContainer = styled.ScrollView`
  flex: 1;
  margin: 20px 16px 24px 16px;
`;

export const Text = styled.Text`
  color: ${colors.PRIMARY_TEXT_COLOR};
  font-family: ${Platform.select({ iOS: 'System', android: 'SF-Pro-Text-Medium' })};
`;

export const ServiceUserRulesTitle = styled(Text)`
  margin-bottom: 18;
  font-size: ${fontSizes.FONT_SIZE_M};
  font-weight: ${Platform.select({ iOS: fontWeights.FONT_WEIGHT_SEMIBOLD, android: '600' })};
`;

export const RulesTitle = styled(Text)`
  margin-top: ${margins.MARGIN_S};
  font-size: ${fontSizes.FONT_SIZE_XS};
  font-weight: ${Platform.select({ iOS: fontWeights.FONT_WEIGHT_SEMIBOLD, android: '600' })};
`;

export const RulesCaption = styled(Text)`
  margin-top: 6;
  font-size: ${fontSizes.FONT_SIZE_XS};
  font-weight: ${Platform.select({ iOS: fontWeights.FONT_WEIGHT_MEDIUM, android: 'normal' })};
`;

export const CheckBoxCaptionContainer = styled.View`
  margin-top: 24;
  flex-direction: row;
`;

export const CheckBoxCaption = styled(Text)`
  margin-left: ${margins.MARGIN_L};
  font-size: ${fontSizes.FONT_SIZE_XS};
  font-weight: ${Platform.select({ iOS: fontWeights.FONT_WEIGHT_SEMIBOLD, android: '600' })};
`;

export const ContractLinkTitleContainer = styled.TouchableOpacity`
  margin-top: 14;
`;

export const ContractLinkTitle = styled.Text`
  text-decoration: underline;
  color: ${colors.LINKING_TEXT_COLOR};
  font-size: ${fontSizes.FONT_SIZE_S};
  font-family: ${Platform.select({ iOS: 'System', android: 'SF-Pro-Text-Medium' })};
`;

export const ButtonContainer = styled.View`
  margin-top: 24;
  align-items: center;
`;
