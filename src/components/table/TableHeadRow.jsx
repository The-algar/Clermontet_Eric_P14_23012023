// IMPORTS // ______________________________________________________________

import React from 'react'
import PropTypes from 'prop-types'
// import components
import Sorts from "./Sorts";
import styled from "styled-components";

// JSX // _________________________________________________________________

/**
 * TableHeadRow component displays the table header.
 * @name TableHeadRow
 * @param {object} props 
 * @returns {?JSX}
 */

const TableHeadRow = (props) => {
  return (
    <ThDiv>
      <p>{props.element.name}</p>
      <Sorts
        id={props.element.id}
        list={props.list}
        employeesToDisplay={props.employeesToDisplay}
      />
    </ThDiv>
  );
};

// PROPTYPES // ___________________________________________________________

TableHeadRow.propTypes = {
  element: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired,
  listToDisplay: PropTypes.array.isRequired
}

// EXPORT // ______________________________________________________________

export default TableHeadRow;

// CSS // _________________________________________________________________

const ThDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`;
