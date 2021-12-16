import MainInterface from './components/interfaces/MainInterface'
import CONFIG from './Config'
import Game from './components/Game'

class Main extends Game implements MainInterface {
  boardTable: HTMLTableElement
  boardTableArray: HTMLTableCellElement[][]
  boardsResultsContainer: HTMLTableElement
  anwsersTableArray: HTMLTableCellElement[][]

  constructor() {
    super()
    //?htmlContainers
    this.boardTable = document.querySelector('#gameTable') as HTMLTableElement
    this.boardsResultsContainer = document.querySelector(
      '#anwsersTabe',
    ) as HTMLTableElement
    this.boardTableArray = []
    this.currentRow = 0
    this.anwsersTableArray = []

    this.start()
  }
  currentRow: number
  protected start(): void {
    this.ceateBoadrd()
    this.createAnwsers()
    this.renderAvailibleDots()
    this.renderNextDots()
    document.querySelector('#start').addEventListener('click', this.startGame)
    document.querySelector('#try').addEventListener('click', this.checkAnwsers)
    document.querySelector('#giveUp').addEventListener('click', this.giveUp)
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
      this.anwsersTableArray[i] = []
      for (let cell = 0; cell < CONFIG.dotPerRow; cell++) {
        let cell = document.createElement('th')
        singleRow.appendChild(cell)
        this.anwsersTableArray[i].push(cell)
      }
      this.boardsResultsContainer.prepend(singleRow)
    }
  }

  /**
   * check anwsers
   */
  private checkAnwsers = (): void => {
    if (this.hasStarted && this.isArrayFull()) {
      this.boardTableArray[this.currentRow].forEach(
        (e: HTMLTableCellElement, c: number) => {
          e.style.background = `url('./assets/img/${this.dotColorsArray[c]}.png')`
        },
      )
      this.nextDotsContainer.forEach((e) => (e.style.background = ''))

      //?check for win
      let dots: Array<string> = this.checkCode(this.dotColorsArray)

      if (
        [...new Set(dots)].length == 1 &&
        [...new Set(dots)].includes('black')
      ) {
        return alert('gratulacje wygranej!!!!!! zgadłeś kod')
      } else
        dots.map((e, c) => {
          this.anwsersTableArray[this.currentRow][
            c
          ].style.background = `url('./assets/img/${e}.png')`
        })

      this.dotColorsArray = ['', '', '', '']
      //?end game
      if (this.currentRow == CONFIG.tryNumber - 1) {
        alert('Koniec gry : poprawny kod to ' + this.codeArray.join(' '))
      } else {
        this.currentRow++
      }
    }
  }
}

new Main()
