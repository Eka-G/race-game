export default function appendElements(parentElem: HTMLElement, ...args: HTMLElement[]): void {
  args.forEach((elem) => parentElem.appendChild(elem));
}
