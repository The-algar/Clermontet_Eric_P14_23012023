// IMPORTS // ______________________________________________________________

import React from 'react';
import PropTypes from 'prop-types';

// JSX // _________________________________________________________________

/**
 * TableBodyRow component displays the table rows
 * @name TableBodyRow
 * @param {object} props 
 * @returns {?JSX}
 */

const TableBodyRow = ({ employee, keysToDisplay }) => {
  return keysToDisplay.map((el, index) => (
    <td key={index}>{employee[el.id]}</td>
  ));
};

// PROPTYPES // ___________________________________________________________

TableBodyRow.propTypes = {
  keysToDisplay: PropTypes.array.isRequired,
  element: PropTypes.object.isRequired
}

// EXPORT // ______________________________________________________________

export default TableBodyRow
