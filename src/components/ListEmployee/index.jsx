import React from 'react'
import styled from 'styled-components'
import Arrows from './Arrows'
import colors from '../../utils/style/colors'

const tableHead = [
  'First Name',
  'Last Name',
  'Start Date',
  'Department',
  'Date of birth',
  'Street',
  'City',
  'State',
  'Zip Code',
]

const Table = () => {
  return (
    <TableContainer>
      <TableStyle>
        <thead>
          <TrHead>
            {tableHead.map((element, index) => {
              return (
                <th key={index}>
                  <ThDiv>
                    <p>{element}</p>
                    <Arrows />
                  </ThDiv>
                </th>
              )
            })}
          </TrHead>
        </thead>
        <TBodyContainer>
          <TBody>
            <td>Tony</td>
            <td>Stark</td>
            <td>01/02/2023</td>
            <td>Sales</td>
            <td>05/31/1982</td>
            <td>02 avengers street</td>
            <td>Nyc</td>
            <td>New York</td>
            <td>10001</td>
          </TBody>
          <TBody>
            <td>Tony</td>
            <td>Stark</td>
            <td>01/02/2023</td>
            <td>Sales</td>
            <td>05/31/1982</td>
            <td>02 avengers street</td>
            <td>Nyc</td>
            <td>New York</td>
            <td>10001</td>
          </TBody>
          <TBody>
            <td>Tony</td>
            <td>Stark</td>
            <td>01/02/2023</td>
            <td>Sales</td>
            <td>05/31/1982</td>
            <td>02 avengers street</td>
            <td>Nyc</td>
            <td>New York</td>
            <td>10001</td>
          </TBody>
          <TBody>
            <td>Tony</td>
            <td>Stark</td>
            <td>01/02/2023</td>
            <td>Sales</td>
            <td>05/31/1982</td>
            <td>02 avengers street</td>
            <td>Nyc</td>
            <td>New York</td>
            <td>10001</td>
          </TBody>
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

  }
`
const TBodyContainer = styled.tbody`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`
const TBody = styled.tr`
  background-color: white;
  &:nth-child(even) {
    background-color: ${colors.mainBgColor};
  }
  & > td {
    vertical-align: middle;
    font-weight: 300;
    padding: .2rem .4rem;
    font-size: 0.9rem;
  }
`
const ThDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`