import Code from './Code'
import GameInterface from './interfaces/GameInterface'
import CONFIG from '../Config'

export default class Game extends Code implements GameInterface {
  startButton: HTMLButtonElement
  pickDotContianer: HTMLTableElement
  hasStarted: boolean
  slectedDotColor: string | null
  constructor() {
    super()
    this.hasStarted = false
    this.startButton = document.querySelector('#start') as HTMLButtonElement
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

  //?helping functions
  /**
   *
   * @param color color of dot
   */
  selectDot = (color: string): void => {
    if (this.hasStarted) {
      let container = document.querySelector('#dots') as HTMLTableElement
      container.style.visibility = 'hidden'
      this.slectedDotColor = color
      document.body.style.cursor = `url('../assets/img/${color}.png'), auto`
      container.style.visibility = 'visible'
    }
  }
}
