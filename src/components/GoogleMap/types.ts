import { ListItem } from '../ItemsList/types';

export interface MapInterface {
  center: { lat: number; lng: number };
  zoom: number;
  markers: ListItem[];
  setListOnBoundsChanged: (markers: ListItem[]) => void;
}
