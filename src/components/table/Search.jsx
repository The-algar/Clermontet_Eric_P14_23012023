import React from 'react'
import Input from '../CreateEmployee/Input'
import styled from 'styled-components'

const Search = ({value, onChange}) => {
  return (
    <SearchDiv>
    <Input // Search
      direction={'row'}
      charAndId={'search:'}
      inputType={'search'}
      value={value}
      required={false}
      onChange={onChange}
    />
  </SearchDiv>
);
};

export default Search;

const SearchDiv = styled.div`
  & > div {
    align-items: center;
    & > label {
      font-weight: normal;
    }
  }
`