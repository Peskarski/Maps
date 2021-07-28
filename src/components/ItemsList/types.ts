import { Coordinates, Bounds } from '../GoogleMap/types';

export type ListItem = {
  id: number;
  first_name: string;
  last_name: string;
  lat: number;
  lng: number;
  avatar: string;
  distance?: number;
};

export interface ListInterface {
  list: ListItem[];
  currentPosition: Coordinates | null;
  setMarkersOnListChange: (markers: ListItem[]) => void;
}
