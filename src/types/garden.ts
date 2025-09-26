export interface GardenResponse {
  name: string;
  description: string;
  imgUrl: string;
  position: {
    lng: number;
    lat: number;
  };
}