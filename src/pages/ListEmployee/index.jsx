import React, { useState } from 'react'
import Table from '../../components/ListEmployee'
import Input from '../../components/CreateEmployee/Input'
import HeaderTabs from '../../components/CreateEmployee/HeaderTabs'
import { InputLabel } from '../../components/CreateEmployee/Input'
import { SelectStyle } from '../../pages/CreateEmployee/'
import styled from 'styled-components'
// import colors from '../../utils/style/colors'

const Main = styled.main`
  background-color: #eeeeee;
  max-width: 1440px;
  margin: auto;
  margin-top: 2.5rem;
  line-height: 1;
  padding: 1rem 1.5rem;
  border: 2px inset #bfc8d3;
  // border-right: 2px inset #bfc8d3;
  // border-bottom: 2px inset #bfc8d3;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 5px 20px rgb(100, 100, 100, 0.3);
`

export const TableStyle = styled.table`
  width: 100%;
`
export const THead = styled.thead`
  & > tr {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const TBody = styled.tbody`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`
export const Th = styled.th`
  ${'' /* display: flex;
  align-items: center;
  padding: 0.5rem; */}
`
const ListEmployees = () => {
  const [search, setSearch] = useState('')
  return (
    <Main>
      <HeaderTabs />
      <h2 className="sr-only">Current employees</h2>
      <FiltersWrapper>
        <Entries>
          {/* <p>Show</p> */}
          <InputLabel htmlFor="entries">Show&nbsp;&nbsp;</InputLabel>
          <SelectStyle name="entries" id="entries">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </SelectStyle>
          <EntriesText> entries</EntriesText>
        </Entries>
        <Search>
          <Input // Search
            direction={'row'}
            charAndId={'search:'}
            inputType={'search'}
            value={search}
            required={false}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
        </Search>
      </FiltersWrapper>
      <Table />
    </Main>
  )
}

export default ListEmployees


const FiltersWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`
const Entries = styled.div`
  display: flex;
  align-items: center;
  & > label {
      font-weight: normal;
  }
`
const Search = styled.div`
  & > div {
    align-items: center;
    & > label {
      font-weight: normal;
    }
  }
`
const EntriesText = styled.p`
  padding-left: .4rem;
`