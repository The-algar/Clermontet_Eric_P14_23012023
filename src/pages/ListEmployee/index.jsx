import React, { useState } from 'react'
import Table from '../../components/ListEmployee'
import Input from '../../components/CreateEmployee/Input'
import HeaderTabs from '../../components/CreateEmployee/HeaderTabs'
import { InputLabel } from '../../components/CreateEmployee/Input'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

import { useSelector } from 'react-redux'

const EmployeesList = () => {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)

  const employees = useSelector((state) => state.getEmployees.employees)
  const length = employees.length

  return (
    <Main>
      <HeaderTabs />
      <h2 className="sr-only">Current employees</h2>
      <section>
        <FiltersWrapper>
          <Entries>
            <InputLabel htmlFor="entries">Show</InputLabel>
            <SelectStyle
              name="entries"
              id="entries"
              value={entries}
              onChange={(e) => {
                setEntries(e.target.value)
              }}
            >
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

        {/* <Table />
         */}
         
        {length > 0 && <Table employees={employees} />}
        <FiltersWrapper>
          <p>
            Showing 1 to {entries} of {length} entries
          </p>
          <div>
            <span>Previous</span>
            <Button>1</Button>
            <Button>2</Button>
            <span>Next</span>
          </div>
        </FiltersWrapper>
      </section>
    </Main>
  )
}

export default EmployeesList

const Main = styled.main`
  background-color: ${colors.background};
  max-width: 1440px;
  margin: auto;
  margin-top: 2.5rem;
  line-height: 1;
  padding: 1rem 1.5rem;
  border: 1px inset ${colors.secondary};
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 5px 20px rgb(100, 100, 100, 0.3);
`
const SelectStyle = styled.select`
  padding: 5px;
  border-radius: 0.25rem;
  border: 1px inset ${colors.secondary};
  background-color: ${colors.backgroundLight};
  &:hover,
  &:focus {
    background-color: rgba(153, 153, 0, 0.2);
  }
  &:focus-visible {
    outline: none;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`
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
const Button = styled.button`
  text-align: center;
  width: 2rem;
  height: 2rem;
  margin: 0.4rem;
  border-radius: .5rem;
`