import MainInterface from './components/interfaces/MainInterface'
import CONFIG from './Config'
import Game from './components/Game'

class Main extends Game implements MainInterface {
  boardTable: HTMLTableElement
  boardTableArray: HTMLTableCellElement[][]
  boardsResultsContainer: HTMLTableElement
  constructor() {
    super()
    //?htmlContainers
    this.boardTable = document.querySelector('#gameTable') as HTMLTableElement
    this.boardsResultsContainer = document.querySelector(
      '#anwsersTabe',
    ) as HTMLTableElement
    this.boardTableArray = []
    this.start()
  }
  protected start(): void {
    this.ceateBoadrd()
    this.createAnwsers()
    this.renderAvailibleDots()
    this.renderNextDots()
    document.querySelector('#start').addEventListener('click', this.startGame)
  }

  //? Starting methods section
  /**
   * Creates game board and board array
   * @version 1.0
   * @copyright Jakub Bryndal
   * @void
   * @private
   */
  private ceateBoadrd(): void {
    for (let i: number = 0; i < CONFIG.tryNumber; i++) {
      let singleRow = document.createElement('tr')
      this.boardTableArray[i] = []
      for (let cell = 0; cell < CONFIG.dotPerRow; cell++) {
        let cell = document.createElement('th')
        singleRow.appendChild(cell)
        this.boardTableArray[i].push(cell)
      }
      this.boardTable.prepend(singleRow)
    }
  }
  /**
   * renders anwsers dots
   * @private
   *
   */
  private createAnwsers(): void {
    for (let i: number = 0; i < CONFIG.tryNumber; i++) {
      let singleRow = document.createElement('tr')
      this.boardTableArray[i] = []
      for (let cell = 0; cell < CONFIG.dotPerRow; cell++) {
        let cell = document.createElement('th')
        singleRow.appendChild(cell)
        this.boardTableArray[i].push(cell)
      }
      this.boardsResultsContainer.prepend(singleRow)
    }
  }
}

new Main()
