import CodeInterface from './interfaces/CodeInterface'
import CONFIG from '../Config'

export default class Code implements CodeInterface {
  codeArray: string[]

  constructor() {
    this.codeArray = []
  }

  /**
   * Creates new random code
   * @Code
   * @void
   */
  protected newCode = (): void => {
    this.codeArray = []
    for (let i: number = 0; i < CONFIG.dotPerRow; i++) {
      this.codeArray.push(CONFIG.colorsArray[Math.floor(Math.random() * 8)])
    }
    console.log(this.codeArray)
  }
  /**
   *
   * @param codeToCheck Array of code that has to be checked
   */
  protected checkCode = (codeToCheck: Array<string>): Object => {
    return {}
  }
}
