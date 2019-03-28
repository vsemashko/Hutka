import React from 'react';

import { StyledButton, ButtonText, ImageContainer } from './CustomButtonStyles';

const Button = ({
  buttonTitle,
  onButtonPress,
  disabled,
  withImage,
  imageSource,
}) => (
  <StyledButton
    activeOpacity={0.75}
    disabled={disabled}
    onPress={onButtonPress}
  >
    { withImage ? <ImageContainer source={imageSource} /> : null }
    <ButtonText>{ buttonTitle }</ButtonText>
  </StyledButton>
);

export default Button;
