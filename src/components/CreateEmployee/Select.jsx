import React from 'react'
// import { InputLabel, InputWrapper } from '../styles/components/input'
import { capitalizeFirstLowercaseRest } from '../../utils/capitalizeFirstLowercaseRest'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Select = ({ direction, alignItems, charAndId, value, onChange, optionsList }) => {
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
          )
        })}
      </SelectStyle>
    </InputWrapper>
  )
}

export default Select

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: left;
  align-items: ${(props) => props.direction};
  padding: .4rem 0;
`
export const InputLabel = styled.label`
  font-weight: bold;
  padding: .4rem .4rem .4rem 0;
  color: ${colors.text};
`
// const InputStyle = styled.input`
//   padding: .5rem .35rem;
//   border-radius: 0.25rem;
//   border: 1px inset ${colors.background};
//   font-size: .9rem;
//   height: auto;
//   &:hover, 
//   &:focus {
//     background-color: rgba(206, 218, 151, 0.2);
//   }
//   &:focus-visible {
//     outline: none;
//   }
// `
const SelectStyle = styled.select`
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
