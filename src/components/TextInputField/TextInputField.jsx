import React from 'react';

import { PHONE_NUMBER_INPUT } from 'src/constants/textInputTypes';

import config from 'src/config';

import {
  StyledTextInput,
  PhoneNumberPart,
  FlagImage,
  TextInputContainer,
  PhoneNumberText,
} from './TextInputFieldStyles';

const TextInputField = ({
  autoFocus,
  value,
  onChangeText,
  keyboardType,
  customType,
  errorState,
}) => (
  <TextInputContainer errorState={errorState}>
    {
      customType === PHONE_NUMBER_INPUT ? (
        <PhoneNumberPart>
          <FlagImage
            source={config.assets.belarusFlag}
          />
          <PhoneNumberText>+375</PhoneNumberText>
        </PhoneNumberPart>
      ) : null
    }
    <StyledTextInput
      autoFocus={autoFocus}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
    />
  </TextInputContainer>
);

export default TextInputField;
