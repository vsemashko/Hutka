import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import config from 'src/config';

import { CustomButton } from 'src/components';

import {
  HutkaMapContainer,
  SignInButtonWrapper,
  mapStyle,
  newMapStyle,
  SpotImage,
} from './HutkaMapStyles';

const HutkaMap = ({
  onMapReadyLoad, navigateToSignInScreen, navigateToRentScreen, mapIsReady, region, token,
}) => {
  if (!region) return <View style={mapStyle.map}><ActivityIndicator size="large" /></View>;

  return (
    <HutkaMapContainer>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={mapIsReady ? newMapStyle.map : mapStyle.map}
        showsUserLocation
        region={region}
        onMapReady={onMapReadyLoad}
      >
        <Marker
          coordinate={{
            latitude: 53.670450,
            longitude: 23.822164,
          }}
        >
          <SpotImage source={config.assets.parkingAvailableSpot} />
        </Marker>
      </MapView>
      <SignInButtonWrapper>
        {token ? (
          <CustomButton buttonTitle="АРЕНДОВАТЬ ВЕЛОСИПЕД" onButtonPress={navigateToRentScreen} />
        ) : (
          <CustomButton
            buttonTitle="РЕГИСТРАЦИЯ"
            withImage
            imageSource={config.assets.baselinePerson}
            onButtonPress={navigateToSignInScreen}
          />
        )}
      </SignInButtonWrapper>
    </HutkaMapContainer>
  );
};

export default HutkaMap;
