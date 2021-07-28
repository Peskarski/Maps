import { ListItem } from '../ItemsList/types';

export interface MapInterface {
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
  sw: Coordinates;
};
