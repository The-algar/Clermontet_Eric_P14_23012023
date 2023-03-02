import styled from 'styled-components'
import colors from '../../utils/style/colors'

/**
 * Function capitalizeFirstLowercaseRest to capitalize label's first letter
 * @function
 * @name capitalizeFirstLowercaseRest
 * @param {string} string 
 * @returns {string}
 */
 function capitalizeFirstLowercaseRest(string) {
  const regex = /-/gi 
  const newString = string.replace(regex, ' ')
  return newString
    .toLowerCase()
    .split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.substring(1)
    })
    .join(' ')
}

/**
 * Input component to display input buttons
 * @name Input
 * @param {string} charAndId
 * @param {string} inputType
 * @param {string} direction
 * @param {string} value
 * @param {string} onChange
 * @returns {?JSX}
 */

const Input = ({ charAndId, inputType, direction, value, onChange }) => {
let placeholder;
  if (charAndId === 'first name') {
    placeholder = "Enter your First Name";
  } else if (charAndId === "last name") {
    placeholder = "Enter your Last Name";
  } else if (charAndId === "street") {
    placeholder = "Enter your Street";
  } else if (charAndId === "city") {
    placeholder = "Enter your City";
  } else if (charAndId === "zip-code") {
    placeholder = "Enter your Zip Code";
  }

  return (
    <InputWrapper direction={direction}>
      <InputLabel htmlFor={charAndId}>
        {capitalizeFirstLowercaseRest(charAndId)}
      </InputLabel>
      <InputStyle
        type={inputType}
        id={charAndId}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputWrapper>
  )
}

export default Input

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: left;
  margin-bottom: .5rem;
`
export const InputLabel = styled.label`
  font-weight: bold;
  padding: .5rem 0;
`
export const InputStyle = styled.input`
  padding: 5px;
  border-radius: 0.25rem;
  border: 2px inset ${colors.secondary};
  background-color: white;
  &:hover, &:focus {
    background-color: rgba(188, 140, 242, 0.1);
  }
  &:focus-visible {
    outline: none;
  }
  ::placeholder {
    color: gray;
    font-style: italic;
  }
`