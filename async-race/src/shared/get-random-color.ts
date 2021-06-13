export default function getRandomColor() {
  const maxShade = 256;

  function genereteShade() {
    return Math.floor(Math.random() * maxShade).toString(16);
  }

  const color = `#${genereteShade()}${genereteShade()}${genereteShade()}`;

  return color;
}
