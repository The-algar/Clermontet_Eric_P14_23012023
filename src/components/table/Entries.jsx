import React from 'react'
import styled from 'styled-components'
import Select from '../Select'
import entriesQuantity from  '../../data/entriesQuantity'

const Entries = ({ value, onChange }) => {
  return (
    <EntriesStyle>
      <Select
        direction={'row'}
        alignItems={'center'}
        charAndId={'show'}
        value={value}
        onChange={onChange}
        optionsList={entriesQuantity}
      />
      <EntriesText>entries</EntriesText>
    </EntriesStyle>
  )
}

export default Entries

const EntriesStyle = styled.div`
display: flex;
align-items: center;
& > div {
  display: inline;
  & > label {
    font-weight: normal;
  }
}
`
export const EntriesText = styled.p`
  padding-left: 0.4rem;
`
