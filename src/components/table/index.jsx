import React from 'react'
import Sorts from './Sorts'
import keys from '../../data/keys'
import styled from 'styled-components'


const Table = ({ employees }) => {
  return (
    <TableContainer>
      <TableStyle>
        <thead>
          <TrHead>
            {keys.map((element, index) => {
              return (
                <th key={index}>
                  <ThDiv>
                    <p>{element.name}</p>
                    <Sorts id={element.id} />
                  </ThDiv>
                </th>
              )
            })}
          </TrHead>
        </thead>
        <TBodyContainer>
          {employees.map((employee, id) => {
            return (
              <TBody key={id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.startDate}</td>
                <td>{employee.department}</td>
                <td>{employee.dateOfBirth}</td>
                <td>{employee.street}</td>
                <td>{employee.city}</td>
                <td>{employee.state}</td>
                <td>{employee.zipCode}</td>
              </TBody>
            )
          })}
        </TBodyContainer>
      </TableStyle>
    </TableContainer>
  )
}

export default Table

export const TableContainer = styled.div`
  overflow-x: auto;
`
export const TableStyle = styled.table`
  width: 100%;
`
export const TrHead = styled.tr`
  & > th {
    padding: 0.4rem;
    vertical-align: middle;
    white-space: nowrap;
  }
`
export const TBodyContainer = styled.tbody`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`
export const TBody = styled.tr`
  background-color: white;
  &:nth-child(even) {
    background-color: rgba(206, 218, 151, 0.5);
  }
  & > td {
    vertical-align: middle;
    font-weight: 300;
    padding: 0.6rem 0.4rem;
    line-height: 1.5rem;
    white-space: nowrap;
    ${'' /* max-width: 8rem; */}
  }
`
export const ThDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`
