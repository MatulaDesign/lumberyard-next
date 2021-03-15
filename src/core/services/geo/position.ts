import { store } from 'src/core/services/storage';

export const position = {
  get: () =>
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = Number(position.coords.latitude.toFixed(2));
        const lng = Number(position.coords.longitude.toFixed(2));
        const newPosition: typeof position = {
          ...position,
          coords: { ...position.coords, latitude: lat, longitude: lng },
        };
        store.set.geo((data) => {
          data.position = newPosition;
        });
      },
      (error) => {
        store.set.status('geo', 'error', error.message);
      },
    ),
};
