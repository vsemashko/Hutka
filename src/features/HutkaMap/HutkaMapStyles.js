import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const HutkaMapContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const mapStyle = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export const SignInButtonWrapper = styled.View`
  position: absolute;
  bottom: 24;
  align-items: center;
`;
