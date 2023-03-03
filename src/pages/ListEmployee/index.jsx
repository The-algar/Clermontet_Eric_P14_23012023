// IMPORTS // ______________________________________________________________

import React from 'react';
import { useSelector } from "react-redux";
import HeaderTabs from "../../components/CreateEmployee/HeaderTabs";
import TableWithSortingandFilters from "../../components/table/TableWithSortingandFilters";
import entriesQuantity from "../../data/entriesQuantity";
import Loader from '../../components/Loader'
import keys from "../../data/keys";
import styled from "styled-components";
import colors from "../../utils/style/colors";

// JSX // _________________________________________________________________

/**
 * EmployeesList component to display Hrnet's list of employees tab
 * @name ListEmployee
 * @returns {?JSX}
 */

const EmployeesList = () => {
  let data, entries, keysToDisplay

  data = useSelector((state) => state.getEmployees.employees)
  entries = entriesQuantity
  keysToDisplay = keys

  const isLoading = useSelector((state) => state.getEmployees.isLoading)

  return (
    <Main>
      <HeaderTabs />
      <h2 className="sr-only">Current employees</h2>
      <section>
        <h2 className="sr-only">Current employees</h2>
        {isLoading ? (
        <Loader />
      ) : (
        <TableWithSortingandFilters
          list={data}
          entriesNumber={entries}
          keysToDisplay={keysToDisplay}
        />
      )}
      </section>
    </Main>
  );
};

// EXPORT // ______________________________________________________________

export default EmployeesList;

// CSS // _________________________________________________________________

export const Main = styled.main`
  background-color: ${colors.background};
  min-width: 80vw;
  margin: auto;
  margin-top: 2.5rem;
  line-height: 1;
  padding: 1rem 1.5rem;
  border: 1px inset ${colors.secondary};
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 5px 20px rgb(100, 100, 100, 0.3);
  @media (max-width: 425px) {
    min-width: 400px !important;
  }
`;
