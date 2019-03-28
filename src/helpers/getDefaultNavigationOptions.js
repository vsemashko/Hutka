import { StyleSheet, Platform } from 'react-native';

import { colors, fontSizes, fontWeights } from 'src/styles';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.WHITE_COLOR,
    borderBottomWidth: 0,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 14,
  },
  title: {
    color: colors.PRIMARY_TEXT_COLOR,
    fontFamily: Platform.OS === 'ios' ? 'System' : 'SF-Pro-Text-Medium',
    fontWeight: Platform.OS === 'ios' ? fontWeights.FONT_WEIGHT_MEDIUM : null,
    fontSize: fontSizes.FONT_SIZE_M,
  },
  backTitle: {
    color: colors.COLOR_WHITE,
    fontSize: fontSizes.FONT_SIZE_M,
  },
});

const getDefaultNavigationOptions = () => ({
  headerStyle: styles.header,
  headerTitleStyle: styles.title,
  headerBackTitleStyle: styles.backTitle,
});

export default getDefaultNavigationOptions;
