export type ListItem = {
  id: number;
  first_name: string;
  last_name: string;
  lat: number;
  lng: number;
  avatar: string;
};

export interface ListInterface {
  list: ListItem[];
  setMarkersOnListChange: (markers: ListItem[]) => void;
}
