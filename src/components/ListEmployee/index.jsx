import React from 'react'
import styled from 'styled-components'
import Arrows from './Arrows'


export const TableStyle = styled.table`
  width: 100%;
`
export const THead = styled.thead`
  & > tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const TBody = styled.tbody`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`
export const Th = styled.th`
  ${'' /* display: flex;
  align-items: center;
  padding: 0.5rem; */}
`
const Table = () => {
  return (
    <TableStyle>
      <THead>
        <tr>
          <Th>
            First Name
            <Arrows />
          </Th>
          <Th>
            Last Name
            <Arrows />
          </Th>
          <Th>
            Start Date
            <Arrows />
          </Th>
          <Th>
            Department
            <Arrows />
          </Th>
          <Th>
            Date of Birth
            <Arrows />
          </Th>
          <Th>
            Street
            <Arrows />
          </Th>
          <Th>
            City
            <Arrows />
          </Th>
          <Th>
            State
            <Arrows />
          </Th>
          <Th>
            Zip code
            <Arrows />
          </Th>
        </tr>
      </THead>
      <TBody>
        <tr>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
          <td>f</td>
          <td>g</td>
          <td>h</td>
          <td>i</td>
        </tr>
      </TBody>
      <tfoot></tfoot>
    </TableStyle>
  )
}

export default Table