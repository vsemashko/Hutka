import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import MapView, {
  PROVIDER_GOOGLE, Marker, Callout, Polygon,
} from 'react-native-maps';

import config from 'src/config';

import { CustomButton } from 'src/components';
import { PRIMARY_COLOR } from '../../styles/colors';

import {
  HutkaMapContainer,
  SignInButtonWrapper,
  mapStyle,
  newMapStyle,
  SpotImage, MapCalloutView,
} from './HutkaMapStyles';

const HutkaMap = ({
  onMapReadyLoad, navigateToSignInScreen, navigateToRentScreen, mapIsReady, region, token, parkings,
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
        {parkings.map(parking => (
          <Marker
            key={parking.id}
            coordinate={{
              latitude: parking.coordinate.latitude,
              longitude: parking.coordinate.longitude,
            }}
          >
            <SpotImage source={config.assets.parkingAvailableSpot} />
            <Callout>
              <MapCalloutView>
                <Text>{parking.description}</Text>
                <Text>{`Адрес: ${parking.address}`}</Text>
                <Text>{`Свободных велосипедов: ${parking.availableBikes}`}</Text>
              </MapCalloutView>
            </Callout>
          </Marker>
        ))}
        {parkings.map(parking => (
          <Polygon
            key={parking.id}
            coordinates={parking.polygon.coordinates[0]
              .map(coord => ({ latitude: coord[0], longitude: coord[1] }))}
            fillColor={PRIMARY_COLOR}
          />
        ))}
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
