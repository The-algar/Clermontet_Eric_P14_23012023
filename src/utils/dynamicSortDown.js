const dateRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/

export const dynamicSortDown = (property) => {
  return function compare(a, b) {
    if (dateRegex.test(a[property]) === true) {
      let dateA = new Date(a[property])
      let dateB = new Date(b[property])
      return dateA < dateB ? 1 : dateA === dateB ? 0 : -1
    } else {
      let stringA = a[property].split(' ').join('')
      a = stringA.toLowerCase()
      let stringB = b[property].split(' ').join('')
      b = stringB.toLowerCase()
      return a < b ? 1 : a === b ? 0 : -1
    }
  }
}
