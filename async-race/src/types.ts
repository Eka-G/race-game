export interface CarInterface {
  name: string;
  color: string;
  id?: number;
}

export interface CreateEventDetail {
  carInfo: CarInterface;
  carAmount: number;
}