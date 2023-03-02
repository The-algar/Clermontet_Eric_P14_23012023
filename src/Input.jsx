import { InputLabel, InputStyle, InputWrapper } from "../styles/components/input"

/**
 * Function capitalizeFirstLetter to capitalize label's first letter
 * @function
 * @name capitalizeFirstLetter
 * @param {string} string 
 * @returns {string}
 */
 function capitalizeFirstLetter(string) {
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
 * @param {string} forAndId
 * @param {string} inputType
 * @param {string} direction
 * @param {string} value
 * @param {string} onChange
 * @returns {?JSX}
 */

const Input = ({ forAndId, inputType, direction, value, onChange }) => {

  return (
    <InputWrapper direction={direction}>
      <InputLabel htmlFor={forAndId}>
        {capitalizeFirstLetter(forAndId)}
      </InputLabel>
      <InputStyle
        type={inputType}
        id={forAndId}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  )
}

export default Input
