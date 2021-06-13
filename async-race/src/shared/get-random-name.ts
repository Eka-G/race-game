const carBrands = ['Hyundai', 'BMV', 'Audi', 'Ford', 'Fiat', 'Honda', 'Kia', 'Nissan', 'Toyota', 'Volvo'];

const carModels = [
  'Sonata',
  'Auris',
  'Sportage',
  'X3',
  'Focus',
  'Freemont',
  'Civic',
  'Patrol IV',
  'Cross Country',
  'Camry',
];

export default function getRandomName(): string {
  const brandMax = carBrands.length;
  const modelMax = carBrands.length;

  const randomBrand = carBrands[Math.floor(Math.random() * brandMax)];
  const randomModel = carModels[Math.floor(Math.random() * modelMax)];

  const res = `${randomBrand} ${randomModel}`;

  return res;
}
