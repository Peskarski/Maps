export type ListItem = {
  id: number;
  first_name: string;
  last_name: string;
  lat: number;
  lng: number;
  avatar: string;
};

export type ListType = {
  list: ListItem[];
};
