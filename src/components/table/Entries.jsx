// IMPORTS // ______________________________________________________________

import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import Select from "../Select";

/**
 * The "Entries" component displays a dropdown list for selecting the number of rows to show on the table.
 * @name Entries
 * @param {object} props 
 * @returns {?JSX}
 */

// JSX // _________________________________________________________________

const Entries = ({ value, onChange, entriesNumber }) => {
  return (
    <EntriesStyle>
      <Select
        direction={"row"}
        alignItems={"center"}
        charAndId={"show"}
        value={value}
        onChange={onChange}
        optionsList={entriesNumber}
      />
      <EntriesText>entries</EntriesText>
    </EntriesStyle>
  );
};

// PROPTYPES // ___________________________________________________________

Entries.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),  
  onChange: PropTypes.func.isRequired,
  entriesNumber: PropTypes.array.isRequired
}

// EXPORT // ______________________________________________________________

export default Entries

// CSS // _________________________________________________________________

const EntriesStyle = styled.div`
  display: flex;
  align-items: center;
  & > div {
    display: inline;
    & > label {
      font-weight: normal;
    }
  }
`;
export const EntriesText = styled.p`
  padding-left: 0.4rem;
`;
