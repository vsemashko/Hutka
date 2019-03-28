const logoWithBike = require('../assets/images/logoWithBike.png');
const belarusFlag = require('../assets/images/belarusFlag.png');
const refreshErrow = require('../assets/images/refresh-arrow.png');
const hutkaLogo = require('../assets/images/hutkaLogo.png');
const baselinePerson = require('../assets/images/baselinePerson.png');
const parkingAvailableSpot = require('../assets/images/ParkingSpot.png');
const emptyPrkingSpot = require('../assets/images/emptySpot.png');

function confirmResult() {}

const assets = {
  logoWithBike,
  belarusFlag,
  refreshErrow,
  hutkaLogo,
  baselinePerson,
  parkingAvailableSpot,
  emptyPrkingSpot,
};

export default {
  apiUrl: 'http://localhost:8000',
  contractLink: 'http://rp5.by/Weather_in_Minsk',
  assets,
  confirmResult,
};
