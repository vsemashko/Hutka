import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const HutkaMapContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const mapStyle = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    marginBottom: 1,
  },
});

export const newMapStyle = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    marginBottom: 0,
  },
});

export const SignInButtonWrapper = styled.View`
  position: absolute;
  bottom: 24;
  align-items: center;
`;

export const SpotImage = styled.Image``;

export const MapCalloutView = styled.View`
  width: 300;
`;
