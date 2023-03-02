import { capitalizeFirstLowercaseRest } from "../../utils/capitalizeFirstLowercaseRest";
import styled from "styled-components";
import colors from "../../utils/style/colors";

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

const Input = ({
  charAndId,
  inputType,
  direction,
  value,
  onChange,
  required,
}) => {
  let placeholder;
  if (charAndId === "first-name") {
    placeholder = "Enter your First Name";
  } else if (charAndId === "last-name") {
    placeholder = "Enter your Last Name";
  } else if (charAndId === "street") {
    placeholder = "Enter your Street";
  } else if (charAndId === "city") {
    placeholder = "Enter your City";
  } else if (charAndId === "zip-code") {
    placeholder = "Enter Zip Code";
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
        required={required}
      />
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: left;
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
