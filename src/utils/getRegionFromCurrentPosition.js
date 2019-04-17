export default () => new Promise((resolve) => {
  navigator.geolocation.getCurrentPosition(({ coords }) => {
    resolve({
      latitude: coords.latitude,
      longitude: coords.longitude,
      latitudeDelta: 0.006,
      longitudeDelta: 0.006,
    });
  });
});
