import React from 'react'

const TableBodyRow = ({ employee, keysToDisplay }) => {
  return keysToDisplay.map((el, index) => (
    <td key={index}>{employee[el.id]}</td>
  ))
}

export default TableBodyRow
