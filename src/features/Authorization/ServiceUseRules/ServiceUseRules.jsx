import React from 'react';
import CheckBox from 'react-native-check-box';

import { CustomButton } from 'src/components';

import { colors } from 'src/styles';

import {
  ServiceUserRulesContainer,
  ServiceUserRulesTitle,
  RulesTitle,
  RulesCaption,
  ContractLinkTitleContainer,
  ContractLinkTitle,
  CheckBoxCaptionContainer,
  CheckBoxCaption,
  ButtonContainer,
} from './ServiceUseRulesStyles';

const ServiceUseRules = ({
  viewModel, onCheckBoxPress, isChecked, navigateByContractLink, confirmContract,
}) => (
  <ServiceUserRulesContainer>
    <ServiceUserRulesTitle>{ viewModel.title }</ServiceUserRulesTitle>
    <RulesTitle>{ viewModel.rentTitle }</RulesTitle>
    <RulesCaption>{ viewModel.rent }</RulesCaption>
    <RulesTitle>{ viewModel.returnBikeTitle }</RulesTitle>
    <RulesCaption>{ viewModel.returnBike }</RulesCaption>
    <RulesTitle>{ viewModel.useTitle }</RulesTitle>
    <RulesCaption>{ viewModel.use }</RulesCaption>
    <ContractLinkTitleContainer onPress={navigateByContractLink}>
      <ContractLinkTitle>{ viewModel.contractTitle }</ContractLinkTitle>
    </ContractLinkTitleContainer>
    <CheckBoxCaptionContainer>
      <CheckBox
        checkedCheckBoxColor={colors.PRIMARY_COLOR}
        onClick={onCheckBoxPress}
        isChecked={isChecked}
      />
      <CheckBoxCaption>{ viewModel.contractCaption }</CheckBoxCaption>
    </CheckBoxCaptionContainer>
    <ButtonContainer>
      <CustomButton
        disabled={isChecked === false}
        buttonTitle="ПОДТВЕРДИТЬ"
        onButtonPress={confirmContract}
      />
    </ButtonContainer>
  </ServiceUserRulesContainer>
);

export default ServiceUseRules;
