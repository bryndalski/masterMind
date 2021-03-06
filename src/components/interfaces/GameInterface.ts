export default interface GameInterface {
  startButton: HTMLButtonElement
  pickDotContianer: HTMLTableElement
  hasStarted: boolean
  slectedDotColor: string | null
  dotColorsArray: Array<string>
  nextDotsContainer: Array<HTMLTableCellElement>
}
