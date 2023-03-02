/**
 * Function capitalizeFirstLowercaseRest to capitalize label's first letter
 * @function
 * @name capitalizeFirstLowercaseRest
 * @param {string} string 
 * @returns {string}
 */
 export const capitalizeFirstLowercaseRest = (string) => {
  const regex = /-/gi 
  const newString = string.replace(regex, ' ')
  return newString
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(' ')
}
