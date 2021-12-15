/**
 * @interface
 * @description
 * @boarTable Html game Table
 * @boardTableArray
 * @boardResults
 *
 */
export default interface MainInterface {
  boardTable: HTMLTableElement
  boardTableArray: Array<Array<HTMLTableCellElement>>
  boardsResultsContainer: HTMLTableElement
}
