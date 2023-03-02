import React from "react";
import styled from "styled-components";
import colors from "../../utils/style/colors";

import TableBodyRow from "./TableBodyRow";
import TableHeadRow from "./TableHeadRow";

const Table = ({ employeesToDisplay, list, keysToDisplay }) => {
  return (
    <TableContainer>
      <TableStyle>
        <thead>
          <TrHead>
            {keysToDisplay.map((element, index) => {
              return (
                <th key={index}>
                  <TableHeadRow
                    element={element}
                    list={list}
                    employeesToDisplay={employeesToDisplay}
                  />
                </th>
              );
            })}
          </TrHead>
        </thead>
        <TBody>
          {employeesToDisplay.map((employee, index) => {
            return (
              <TrBody key={index}>
                <TableBodyRow
                  employee={employee}
                  keysToDisplay={keysToDisplay}
                />
              </TrBody>
            );
          })}
        </TBody>
      </TableStyle>
    </TableContainer>
  );
};

export default Table;

const TableContainer = styled.div`
  overflow-x: auto;
`;
const TableStyle = styled.table`
  width: 100%;
`;
const TBody = styled.tbody`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
const TrBody = styled.tr`
  background-color: ${colors.backgroundLight};

  &:nth-child(even) {
    background-color: rgba(206, 218, 151, 0.5);
  }
  & > td {
    border-left: 1px dotted ${colors.textLight};
    vertical-align: middle;
    font-weight: 300;
    padding: 0.6rem;
    line-height: 1.5rem;
    white-space: nowrap;
    ${"" /* max-width: 8rem; */}
  }
`;
const TrHead = styled.tr`
  & > th {
    padding: 0.4rem 0.6rem;
    vertical-align: middle;
    white-space: nowrap;
  }
`;
