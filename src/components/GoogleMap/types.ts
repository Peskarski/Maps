import { ListItem } from '../ItemsList/types';

export interface MapInterface {
  center: Coordinates;
  zoom: number;
  markers: ListItem[];
  currentPosition: Coordinates | null;
  setListOnBoundsChanged: (markers: ListItem[]) => void;
}

export type Coordinates = {
  lat: number;
  lng: number;
};

export type Bounds = {
  ne: Coordinates;
  nw: Coordinates;
  se: Coordinates;
  sw: Coordinates;
};
