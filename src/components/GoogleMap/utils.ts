import { Coordinates, Bounds } from './types';

export const isPointInsideBounds = ({ lat, lng }: Coordinates, { nw, ne, sw, se }: Bounds) =>
  lat > se.lat && lat < ne.lat && lng > nw.lng && lng < ne.lng;
