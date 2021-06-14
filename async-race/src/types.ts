export interface CarInterface {
  name: string;
  color: string;
  id?: number;
}

export interface CreateEventDetail {
  carInfo: CarInterface;
  carDuplicate: number;
}

export interface StartEventDetail {
  id: number;
  animationSpeed: number;
}

export interface StartResponse {
  velocity: number;
  distance: number;
}

export interface WinEventDetail {
  name: string;
  id: number;
  time: number;
}
