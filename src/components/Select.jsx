import React from 'react'
import { InputLabel, InputWrapper } from '../components/CreateEmployee/Select'
import { capitalizeFirstLowercaseRest } from '../components/CreateEmployee/Input'
import styled from 'styled-components'
import colors from '../utils/style/colors'

const Select = ({ direction, alignItems, charAndId, value, onChange, optionsList }) => {
  return (
    <InputWrapper direction={direction} alignItems={alignItems}>
      <InputLabel htmlFor={charAndId}>{capitalizeFirstLowercaseRest(charAndId)}</InputLabel>
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
          )
        })}
      </SelectStyle>
    </InputWrapper>
  )
}

export default Select

export const SelectStyle = styled.select`
  padding: .5rem .35rem;
  border-radius: 0.25rem;
  border: 1px inset ${colors.background};
  font-size: .9rem;
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
`