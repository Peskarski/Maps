import { ListItem } from '../ItemsList/types';

export interface MapInterface {
  markers: ListItem[];
  currentPosition: Coordinates | null;
  activeMarker: number | null;
  setListOnBoundsChanged: (markers: ListItem[]) => void;
}

export type Coordinates = {
  lat: number;
  lng: number;
};

export type Bounds = {
  ne: Coordinates;
  sw: Coordinates;
};

export type Size = {
  width: number;
  height: number;
};
