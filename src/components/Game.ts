import Code from './Code'
import GameInterface from './interfaces/GameInterface'
import CONFIG from '../Config'

export default class Game extends Code implements GameInterface {
  startButton: HTMLButtonElement
  pickDotContianer: HTMLTableElement
  hasStarted: boolean
  slectedDotColor: string | null
  dotColorsArray: string[]

  constructor() {
    super()
    this.hasStarted = false
    this.startButton = document.querySelector('#start') as HTMLButtonElement
    this.dotColorsArray = ['', '', '', '']
  }

  //?new game
  /**
   * handle statr game button
   * @example
   * crates code like ["orange","yellow","blue","pink"]
   */
  protected startGame = () => {
    this.startButton.removeEventListener('click', this.startGame)
    this.startButton.style.visibility = 'hidden'
    this.hasStarted = true
    this.newCode()
  }

  /**
   * Renders all availible dots
   */
  protected renderAvailibleDots(): void {
    CONFIG.colorsArray.forEach((element: string, counter: number) => {
      let cell = document.createElement('th')
      let dot = document.createElement('img')
      dot.src = `./assets/img/${element}.png`
      cell.appendChild(dot)
      cell.addEventListener('click', () => {
        this.selectDot(element)
      })
      document
        .querySelector(
          `#dots tbody tr${counter < 4 ? ':first-child' : ':nth-child(2)'}`,
        )
        .appendChild(cell)
    })
  }
  /**
   * Render dots of code
   */
  protected renderNextDots(): void {
    let container = document.querySelector(
      '#nextGuess tbody tr',
    ) as HTMLTableRowElement
    for (let i: number = 0; i < CONFIG.dotPerRow; i++) {
      let cell = document.createElement('th')
      //*handle cell click
      cell.addEventListener('click', () => {
        this.putDot(cell, i)
      })
      container.appendChild(cell)
    }
  }

  //?helping functions
  /**
   *   Handle cursor change for a dot
   * @param color color of dot
   */
  private selectDot = (color: string): void => {
    if (this.hasStarted) {
      this.slectedDotColor = color
      document.body.style.cursor = `url('../assets/img/${color}.png'), auto`
    }
  }
  /**
   * Enables selecting color
   * @param cell Cell element
   * @param dotNumber Number of rendered dot
   */
  private putDot = (cell: HTMLTableCellElement, dotNumber: number) => {
    if (this.hasStarted && this.slectedDotColor != null) {
      cell.style.background = `url('./assets/img/${this.slectedDotColor}.png')`
      document.body.style.cursor = `url('../assets/img/kursor.png'), auto`
      this.dotColorsArray[dotNumber] = this.slectedDotColor
      this.slectedDotColor = null
    }
  }
  /**
   * check if array contains empty string
   */
  isArrayFull = () => {
    return !this.dotColorsArray.includes('')
  }
}
