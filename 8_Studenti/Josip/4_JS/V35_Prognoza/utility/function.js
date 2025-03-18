export function getCurrentLocation() {
  const position = {
    lat: null,
    lon: null,
  };
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        position.lat = success.coords.latitude;
        position.lon = success.coords.longitude;
        resolve(success);
      },
      (fail) => {
        resolve(position);
      }
    );
  });

  /* .... */
}
