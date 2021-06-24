export default function getRandomColor(): string {
  const maxShade = 256;

  function genereteShade() {
    const shade = Math.floor(Math.random() * maxShade).toString(16);
    return shade.length === 1 ? `0${shade}` : shade;
  }

  const color = `#${genereteShade()}${genereteShade()}${genereteShade()}`;

  return color;
}
