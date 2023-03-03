// IMPORTS // ______________________________________________________________

import React from 'react';
import PropTypes from 'prop-types';
// import function
import { capitalizeFirstLowercaseRest } from "../../utils/capitalizeFirstLowercaseRest";
import styled from "styled-components";
import colors from "../../utils/style/colors";

// JSX // _________________________________________________________________

/**
 * Select component to display select dropdowns
 * @name Select
 * @param {object} props
 * @returns {?JSX}
 */

const Select = (props) => {
  return (
    <InputWrapper direction={props.direction} alignItems={props.alignItems}>
      <InputLabel htmlFor={props.charAndId}>
        {capitalizeFirstLowercaseRest(props.charAndId)}
      </InputLabel>
      <SelectStyle
        name={props.charAndId}
        id={props.charAndId}
        value={props.value}
        onChange={props.onChange}
      >
        {props.optionsList.map((option, index) => {
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
  charAndId: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  onChange: PropTypes.func.isRequired,
  optionsList: PropTypes.array.isRequired
}

// EXPORT // ______________________________________________________________

export default Select

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: left;
  align-items: ${(props) => props.direction};
  padding: 0.4rem 0;
`;
export const InputLabel = styled.label`
  font-weight: bold;
  padding: 0.4rem 0.4rem 0.4rem 0;
  color: ${colors.text};
`;
const SelectStyle = styled.select`
  padding: 0.5rem 0.35rem;
  border-radius: 0.25rem;
  border: 1px inset ${colors.background};
  font-family: Roboto !important;
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
