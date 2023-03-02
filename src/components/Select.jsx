// IMPORTS // ______________________________________________________________

import React from 'react';
import PropTypes from 'prop-types';
// import function 
import { capitalizeFirstLowercaseRest } from "../utils/capitalizeFirstLowercaseRest";
// import styles 
import { InputLabel, InputWrapper } from "../components/CreateEmployee/Select";
import styled from "styled-components";
import colors from "../utils/style/colors";

// JSX // _________________________________________________________________

/**
 * Select component to display dropdowns
 * @name Select
 * @param {object} props
 * @returns {?JSX}
 */

const Select = ({
  direction,
  alignItems,
  charAndId,
  value,
  onChange,
  optionsList,
}) => {
  return (
    <InputWrapper direction={direction} alignItems={alignItems}>
      <InputLabel htmlFor={charAndId}>
        {capitalizeFirstLowercaseRest(charAndId)}
      </InputLabel>
      <SelectStyle
        name={charAndId}
        id={charAndId}
        value={value}
        onChange={onChange}
      >
        {optionsList.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </SelectStyle>
    </InputWrapper>
  );
};

// PROPTYPES // ___________________________________________________________

Select.propTypes = {
  direction: PropTypes.string.isRequired,
  alignItems: PropTypes.string.isRequired,
  forAndId: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  onChange: PropTypes.func.isRequired,
  optionsList: PropTypes.array.isRequired
}

// EXPORT // ______________________________________________________________

export default Select;

// CSS // _________________________________________________________________

const SelectStyle = styled.select`
  padding: 0.5rem 0.35rem;
  border-radius: 0.25rem;
  border: 1px inset ${colors.background};
  font-size: 0.9rem;
  background-color: white;
  height: auto;
  &:hover,
  &:focus {
    background-color: rgba(206, 218, 151, 0.2);
  }
  &:focus-visible {
    outline: none;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`;
