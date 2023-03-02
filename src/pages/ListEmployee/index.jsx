import React, { useState } from 'react'
import Table from '../../components/table'
import Input from '../../components/CreateEmployee/Input'
import HeaderTabs from '../../components/CreateEmployee/HeaderTabs'
import Entries from '../../components/table/Entries'
import EntriesDisplayed from '../../components/table/EntriesDisplayed'
import Pagination from '../../components/table/Pagination'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

import { useSelector } from 'react-redux'

const EmployeesList = () => {
  const [search, setSearch] = useState('')
  const [entries, setEntries] = useState(10)
  const [page, setPage] = useState(1)

  const employees = useSelector((state) => state.getEmployees.employees)
  const length = employees.length

  const division = employees.length / entries
  const lastDataOnPage = page * entries
  const firstDataOnPage = lastDataOnPage - entries
  const fullPages = Math.trunc(division)
  const pageCount = Math.ceil(division)
  let pageCountRange = []
  for (let i = 0; i < pageCount; i++) {
    pageCountRange.push(i)
  }
  const employeesToDisplay = employees.slice(firstDataOnPage, lastDataOnPage)
  const handleChange = (e) => {
    setEntries(e.target.value)
    setPage(1)
  }
  
  return (
    <Main>
      <HeaderTabs />
      <h2 className="sr-only">Current employees</h2>
            <section>
        <FiltersWrapper>
          <Entries value={entries} onChange={handleChange} />
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

        {length > 0 && <Table employees={employeesToDisplay} />}

        <FiltersWrapper>

          <EntriesDisplayed
            page={page}
            fullPages={fullPages}
            firstDataOnPage={firstDataOnPage}
            lastDataOnPage={lastDataOnPage}
            length={length}
          />

          <Pagination setPage={setPage} page={page} pageCount={pageCount} pageCountRange={pageCountRange} />
        
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
export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`
export const Search = styled.div`
  & > div {
    align-items: center;
    & > label {
      font-weight: normal;
    }
  }
`