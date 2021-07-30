import { Coordinates, Bounds } from './types';
import { ListItem } from '../ItemsList/types';

export const isPointInsideBounds = ({ lat, lng }: Coordinates, { ne, sw }: Bounds) =>
  lat > sw.lat && lat < ne.lat && lng > sw.lng && lng < ne.lng;

export const getCoordinatesForFitBounds = (list: ListItem[]) => {
  const latArray = list.map(({ lat }) => lat);
  const lngArray = list.map(({ lng }) => lng);
  const sw = {
    lat: Math.min(...latArray),
    lng: Math.min(...lngArray),
  };
  const ne = {
    lat: Math.max(...latArray),
    lng: Math.max(...lngArray),
  };

  return { ne, sw };
};
