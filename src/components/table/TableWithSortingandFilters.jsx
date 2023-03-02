// IMPORTS // ______________________________________________________________

import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import functions 
import { standardizeAndLowerCase } from "../../utils/standardizeAndLowerCase";
// import components
import Entries from "./Entries";
import EntriesDisplayed from "./EntriesDisplayed";
import Pagination from "./Pagination";
import Search from "./Search";
import Table from ".";
import styled from "styled-components";
import colors from "../../utils/style/colors";

// JSX // _________________________________________________________________

/**
 * TableWithSortingandFilters component to display table, select entries, search input, sorting and pagination
 * @name TableWithSortingandFilters
 * @param {object} props
 * @returns {?JSX}
 */

const TableWithSortingandFilters = (props) => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const [page, setPage] = useState(1);

  const employeesArr = Array.from(props.list);

  const employeesArrValues = employeesArr.map((el) => {
    const valuesWithoutId = { ...el };
    delete valuesWithoutId.id;
    const values = Object.values(valuesWithoutId);
    const newValues = values.map((el) => standardizeAndLowerCase(el));
    const concat = newValues.join();
    return concat;
  });

  let employeesMatchSearch = [];

  for (let i = 0; i < employeesArrValues.length; i++) {
    if (employeesArrValues[i].includes(search)) {
      employeesMatchSearch.push(employeesArr[i]);
    }
  }

  if (search === "") {
    employeesMatchSearch = props.list;
  }

  const length = employeesMatchSearch.length;
  const division = employeesMatchSearch.length / entries;
  const lastDataOnPage = page * entries;
  const firstDataOnPage = lastDataOnPage - entries;
  const fullPages = Math.trunc(division);
  const pageCount = Math.ceil(division);

  let pageCountRange = [];
  for (let i = 0; i < pageCount; i++) {
    pageCountRange.push(i);
  }

  const employeesToDisplay = employeesMatchSearch.slice(
    firstDataOnPage,
    lastDataOnPage
  );
  const handleChangeSearch = (e) => {
    const value = standardizeAndLowerCase(e.target.value);
    setSearch(value);
  };
  const handleChangeEntries = (e) => {
    setEntries(e.target.value);
    setPage(1);
  };

  return (
    <section>
      <FiltersWrapper>
        <Entries
          value={entries}
          onChange={handleChangeEntries}
          entriesNumber={props.entriesNumber}
        />
        <Search value={search} onChange={handleChangeSearch} />
      </FiltersWrapper>

      {length !== 0 ? (
        <Table
          employeesToDisplay={employeesToDisplay}
          list={props.list}
          keysToDisplay={props.keysToDisplay}
        />
      ) : (
        <NoData>No data available in table</NoData>
      )}

      <FiltersWrapper>
        <EntriesDisplayed
          page={page}
          fullPages={fullPages}
          firstDataOnPage={firstDataOnPage}
          lastDataOnPage={lastDataOnPage}
          length={length}
        />

        <Pagination
          setPage={setPage}
          page={page}
          pageCount={pageCount}
          pageCountRange={pageCountRange}
        />
      </FiltersWrapper>
    </section>
  );
};

// PROPTYPES // ___________________________________________________________

TableWithSortingandFilters.propTypes = {
  list: PropTypes.array.isRequired,
  entriesNumber: PropTypes.array.isRequired,
  keysToDisplay: PropTypes.array.isRequired,
}

// EXPORT // ______________________________________________________________

export default TableWithSortingandFilters;

// CSS // _________________________________________________________________

const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;
const NoData = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid ${colors.textLight};
  border-radius: 0.35rem;
  width: 100%;
  height: 2.5rem;
`;
