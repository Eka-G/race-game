import { getRandomName, getRandomColor } from '.';
import { CarInterface } from '../types';

export default function getRandomCar(): CarInterface {
  return {
    name: getRandomName(),
    color: getRandomColor(),
  };
}
