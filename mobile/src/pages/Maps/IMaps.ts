export interface IRegion {
  latitude: number;
  longitude: number;
  latitudeDelta?: number;
  longitudeDelta?: number;
}

export interface IPlaces {
  id: string;
  createdAt: Date;
  name: string;
  avatar: string;
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
  rating: number;
  averagePrice: string;
  typeOfService: [];
}
