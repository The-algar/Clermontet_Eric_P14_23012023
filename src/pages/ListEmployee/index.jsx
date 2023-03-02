import React from "react";
import { useSelector } from "react-redux";
import HeaderTabs from "../../components/CreateEmployee/HeaderTabs";
import TableWithSortingandFilters from "../../components/table/TableWithSortingandFilters";
import entriesQuantity from "../../data/entriesQuantity";
import keys from "../../data/keys";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const EmployeesList = () => {
  let data;
  data = useSelector((state) => state.getEmployees.employees);
  let entries;
  entries = entriesQuantity;
  let keysToDisplay;
  keysToDisplay = keys;

  return (
    <Main>
      <HeaderTabs />
      <h2 className="sr-only">Current employees</h2>
      <section>
        <h2 className="sr-only">Current employees</h2>
        <TableWithSortingandFilters
          list={data}
          entriesNumber={entries}
          keysToDisplay={keysToDisplay}
        />
      </section>
    </Main>
  );
};

export default EmployeesList;

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
