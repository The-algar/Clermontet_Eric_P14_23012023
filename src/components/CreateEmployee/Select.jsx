import React from "react";
import { capitalizeFirstLowercaseRest } from "../../utils/capitalizeFirstLowercaseRest";
import styled from "styled-components";
import colors from "../../utils/style/colors";

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

export default Select;

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
