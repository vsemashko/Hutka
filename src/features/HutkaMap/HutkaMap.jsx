import React from 'react';
import { Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import config from 'src/config';

import { CustomButton } from 'src/components';

import {
  HutkaMapContainer,
  mapStyle,
  SignInButtonWrapper,
} from './HutkaMapStyles';

const HutkaMap = ({ navigateToSignInScreen }) => (
  <HutkaMapContainer>
    <MapView
      provider={PROVIDER_GOOGLE}
      style={mapStyle.map}
      showsUserLocation
      region={{
        latitude: 53.670429,
        longitude: 23.823311,
        latitudeDelta: 0.006,
        longitudeDelta: 0.006,
      }}
    >
      <Marker
        coordinate={{
          latitude: 53.670450,
          longitude: 23.822164,
        }}
      >
        <Image
          source={config.assets.parkingAvailableSpot}
        />
      </Marker>
    </MapView>
    <SignInButtonWrapper>
      <CustomButton
        buttonTitle="РЕГИСТРАЦИЯ"
        withImage
        imageSource={config.assets.baselinePerson}
        onButtonPress={navigateToSignInScreen}
      />
    </SignInButtonWrapper>
  </HutkaMapContainer>
);

export default HutkaMap;
