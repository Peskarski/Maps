import { ListItem } from '../ItemsList/types';

export interface MapInterface {
  center: { lat: number; lng: number };
  zoom: number;
  setListOnBoundsChanged: (markers: ListItem[]) => void;
}
