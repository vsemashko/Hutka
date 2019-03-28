import React from 'react';

import config from 'src/config';

import { HeaderMapTitleImageContainer, HeaderMapTitleImage } from './MapHeaderTitleStyles';

const MapHeaderTitle = () => (
  <HeaderMapTitleImageContainer>
    <HeaderMapTitleImage source={config.assets.hutkaLogo} />
  </HeaderMapTitleImageContainer>
);

export default MapHeaderTitle;
