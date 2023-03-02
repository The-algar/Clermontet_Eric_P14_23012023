// IMPORTS // ______________________________________________________________

import React from 'react';
import PropTypes from 'prop-types';
// import functions
import { capitalizeFirstLowercaseRest } from "../../utils/capitalizeFirstLowercaseRest";
import styled from "styled-components";
import colors from "../../utils/style/colors";

// JSX // _________________________________________________________________

/**
 * Input component to display input fields
 * @name Input
 * @param {object} props
 * @returns {?JSX}
 */

const Input = (props) => {
  let placeholder;
  if (props.charAndId === "first-name") {
    placeholder = "Enter your First Name";
  } else if (props.charAndId === "last-name") {
    placeholder = "Enter your Last Name";
  } else if (props.charAndId === "street") {
    placeholder = "Enter your Street";
  } else if (props.charAndId === "city") {
    placeholder = "Enter your City";
  } else if (props.charAndId === "zip-code") {
    placeholder = "Enter Zip Code";
  }

  return (
    <InputWrapper direction={props.direction}>
      <InputLabel htmlFor={props.charAndId}>
        {capitalizeFirstLowercaseRest(props.charAndId)}
      </InputLabel>
      <InputStyle
        type={props.inputType}
        id={props.charAndId}
        value={props.value}
        onChange={props.onChange}
        placeholder={placeholder}
        required={props.required}
      />
    </InputWrapper>
  );
};

// PROPTYPES // ___________________________________________________________

Input.propTypes = {
  direction: PropTypes.string.isRequired,
  charAndId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ]),
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired
}

// EXPORT // ______________________________________________________________

export default Input;

// CSS // _________________________________________________________________

const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: left;
  align-items: ${(props) => props.direction};
  padding: 0.4rem 0;
`;

const InputLabel = styled.label`
  font-weight: bold;
  font-family: Roboto !important;
  padding: 0.4rem 0.4rem 0.4rem 0;
  color: ${colors.text};
`;
const InputStyle = styled.input`
  font-style: italic;
  font-family: Roboto !important;
  padding: 0.5rem 0.35rem;
  border-radius: 0.25rem;
  border: 1px inset ${colors.background};
  font-size: 0.9rem;
  height: auto;
  &:hover,
  &:focus {
    background-color: rgba(206, 218, 151, 0.2);
  }
  &:focus-visible {
    outline: none;
  }
`;
