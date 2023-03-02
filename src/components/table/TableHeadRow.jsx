import React from 'react'
import Sorts from './Sorts'
import styled from 'styled-components'

const TableHeadRow = ({ element, list, employeesToDisplay }) => {
  return (
    <ThDiv>
      <p>{element.name}</p>
      <Sorts
        id={element.id}
        list={list}
        employeesToDisplay={employeesToDisplay}
      />
    </ThDiv>
  )
}

export default TableHeadRow

export const ThDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`