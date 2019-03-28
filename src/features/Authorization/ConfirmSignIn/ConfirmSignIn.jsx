import React from 'react';
import { Formik } from 'formik';

import { TextInputField, CustomButton } from 'src/components';

import config from 'src/config';

import { ConfirmSignInSchema } from './validationSchema';

import {
  ConfirmSignInContainer,
  ImageContainer,
  LogoWithBike,
  TextInputTitle,
  TextInputWrapper,
  TextInputFieldWrapper,
  CustomButtonWrapper,
  TextError,
  SendCodeAgainContainer,
  SendCodeAgainText,
  RefreshErrowImage,
  RefreshErrowImageContainer,
} from './ConfirmSignInStyles';

const ConfirmSignIn = ({ confirmCode, sendVerificationCodeAgain }) => (
  <ConfirmSignInContainer>
    <ImageContainer>
      <LogoWithBike source={config.assets.logoWithBike} />
    </ImageContainer>
    <Formik
      initialValues={{ code: '' }}
      onSubmit={confirmCode}
      validationSchema={ConfirmSignInSchema}
    >
      {({
        values, handleSubmit, errors, touched, handleChange, isSubmitting,
      }) => (
        <TextInputWrapper>
          <TextInputTitle>Введите код из СМС</TextInputTitle>
          {errors.code && touched.code ? (
            <TextError>{errors.code}</TextError>
          ) : null}
          <TextInputFieldWrapper>
            <TextInputField
              errorState={!!(errors.code && touched.code)}
              keyboardType="numeric"
              value={values.code}
              onChangeText={handleChange('code')}
            />
          </TextInputFieldWrapper>
          <CustomButtonWrapper>
            <CustomButton
              disabled={!!(errors.code) || isSubmitting}
              buttonTitle="ПОДТВЕРДИТЬ"
              onButtonPress={handleSubmit}
            />
          </CustomButtonWrapper>
        </TextInputWrapper>
      )}
    </Formik>
    <SendCodeAgainContainer
      activeOpacity={0.75}
      onPress={sendVerificationCodeAgain}
    >
      <RefreshErrowImageContainer>
        <RefreshErrowImage source={config.assets.refreshErrow} />
      </RefreshErrowImageContainer>
      <SendCodeAgainText>ВЫСЛАТЬ КОД ПОВТОРНО</SendCodeAgainText>
    </SendCodeAgainContainer>
  </ConfirmSignInContainer>
);

export default ConfirmSignIn;
