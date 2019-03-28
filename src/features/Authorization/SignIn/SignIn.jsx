import React from 'react';
import { Formik } from 'formik';

import { TextInputField, CustomButton } from 'src/components';

import { PHONE_NUMBER_INPUT } from 'src/constants/textInputTypes';

import config from 'src/config';

import { SignInSchema } from './validationSchema';

import {
  SignInContainer,
  LogoWithBike,
  TextInputTitle,
  ImageContainer,
  TextInputWrapper,
  TextInputFieldWrapper,
  SignInCaption,
  CustomButtonWrapper,
  TextError,
} from './SignInStyles';

const SignIn = ({ signIn }) => (
  <SignInContainer>
    <ImageContainer>
      <LogoWithBike
        source={config.assets.logoWithBike}
      />
    </ImageContainer>
    <Formik
      initialValues={{ phoneNumber: '' }}
      onSubmit={signIn}
      validationSchema={SignInSchema}
    >
      {({
        values, handleSubmit, errors, touched, handleChange, isSubmitting,
      }) => (
        <TextInputWrapper>
          <TextInputTitle>Введите Ваш номер телефона</TextInputTitle>
          {errors.phoneNumber && touched.phoneNumber ? (
            <TextError>{errors.phoneNumber}</TextError>
          ) : null}
          <TextInputFieldWrapper>
            <TextInputField
              errorState={!!(errors.phoneNumber && touched.phoneNumber)}
              customType={PHONE_NUMBER_INPUT}
              keyboardType="numeric"
              value={values.phoneNumber}
              onChangeText={handleChange('phoneNumber')}
            />
          </TextInputFieldWrapper>
          <SignInCaption>На указанный номер будет выслан код для регистрации.</SignInCaption>
          <CustomButtonWrapper>
            <CustomButton
              disabled={!!(errors.phoneNumber) || isSubmitting}
              buttonTitle="ВЫСЛАТЬ КОД"
              onButtonPress={handleSubmit}
            />
          </CustomButtonWrapper>
        </TextInputWrapper>
      )}
    </Formik>
  </SignInContainer>
);

export default SignIn;
