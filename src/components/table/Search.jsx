// IMPORTS // ______________________________________________________________

import React from 'react';
import PropTypes from 'prop-types';
import Input from "../CreateEmployee/Input";
import styled from "styled-components";

// JSX // _________________________________________________________________

/**
 * A search component featuring a user input's search field for searching within a specified dataset.
 * @name Search
 * @param {object} props 
 * @returns {?JSX}
 */

const Search = (props) => {
  return (
    <SearchDiv>
      <Input // Search
        direction={"row"}
        charAndId={"search:"}
        inputType={"search"}
        value={props.value}
        required={false}
        onChange={props.onChange}
      />
    </SearchDiv>
  );
};

// PROPTYPES // ___________________________________________________________

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

// EXPORT // ______________________________________________________________

export default Search

// CSS // _________________________________________________________________

const SearchDiv = styled.div`
  & > div {
    align-items: center;
    & > label {
      font-weight: normal;
    }
  }
`;
