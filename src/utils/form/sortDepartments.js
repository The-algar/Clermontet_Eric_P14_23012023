/**
 * sortDepartments is a function to sort objects array departments
 * @function
 * @name sortDepartments
 * @param {object} x 
 * @param {objec} y 
 * @returns {array}
 */

export const sortDepartments = (x, y) => {
  let a = x.label
  let b = y.label
  return a < b ? -1 : a === b ? 0 : 1
}