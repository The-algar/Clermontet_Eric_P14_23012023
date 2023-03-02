import React, { useState } from 'react'
import HeaderTabs from '../../components/CreateEmployee/HeaderTabs'
import Input from '../../components/CreateEmployee/Input'
import departments from '../../data/departments'
import states from '../../data/states'
import { addAndGetEmployees } from '../../firebase/firebaseServices'
import { useStore } from 'react-redux'
import Select from '../../components/CreateEmployee/Select'
import Modale from '../../components/Modale'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CreateEmployee = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [startDate, setStartDate] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [department, setDepartment] = useState('')

  function sortDepartments(x, y) {
    if (x.label < y.label) {
      return -1
    }
    if (x.label > y.label) {
      return 1
    }
    return 0
  }
  const departmentsSorted = departments.sort(sortDepartments)
  const USAStates = states
  const [modaleIsOpen, setModaleIsOpen] = useState(false)

  const store = useStore()


  const closeModale = () => {
    setModaleIsOpen(false)
  }

  const newEmployee = () => {
    return {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      startDate: startDate,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
      department: department,
    }
  }
  const reset = () => {
    setFirstName('')
    setLastName('')
    setDateOfBirth('')
    setStartDate('')
    setStreet('')
    setCity('')
    setState('AL')
    setZipCode('')
    setDepartment('Sales')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addAndGetEmployees(store, newEmployee)
    setModaleIsOpen(true)
    reset()
  }
  
  return (
    <>
    
    <Main>
      <HeaderTabs />
      <h2 className="sr-only">Create employee</h2>
      <Form onSubmit={handleSubmit}>
        <DivInputWrapper>
          <Input // First Name
            direction={'column'}
            charAndId={'first-name'}
            inputType={'text'}
            value={firstName}
            required={true}
            placeholder={''}
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
          />
          <Input // Last Name
            direction={'column'}
            charAndId={'last-name'}
            inputType={'text'}
            value={lastName}
            required={true}
            onChange={(e) => {
              setLastName(e.target.value)
            }}
          />
        </DivInputWrapper>
        <DivInputDateWrapper>
          <Input // Date of Birth
            direction={'column'}
            charAndId={'date-of-birth'}
            inputType={'date'}
            value={dateOfBirth}
            required={true}
            onChange={(e) => {
              setDateOfBirth(e.target.value)
            }}
          />
          <Input // Start Date
            direction={'column'}
            charAndId={'start-date'}
            inputType={'date'}
            value={startDate}
            required={true}
            onChange={(e) => {
              setStartDate(e.target.value)
            }}
          />
        </DivInputDateWrapper>

        <FieldsetStyle>
          <Legend>Address</Legend>
          <DivInputWrapper>
            <Input // Street
              direction={'column'}
              charAndId={'street'}
              inputType={'text'}
              value={street}
              required={true}
              onChange={(e) => {
                setStreet(e.target.value)
              }}
            />
            <Input // City
              direction={'column'}
              charAndId={'city'}
              inputType={'text'}
              value={city}
              required={true}
              onChange={(e) => {
                setCity(e.target.value)
              }}
            />
          </DivInputWrapper>

          <Select
            direction={'column'}
            alignItems={'left'}
            charAndId={'state'}
            value={state}
            onChange={(e) => {
              setState(e.target.value)
            }}
            optionsList={USAStates}
          />

          <DivInputZipWrapper>
            <Input // Zip Code
              direction={'row'}
              charAndId={'zip-code'}
              inputType={'number'}
              value={zipCode}
              required={true}
              onChange={(e) => {
                setZipCode(e.target.value)
              }}
            />
          </DivInputZipWrapper>
        </FieldsetStyle>

        <Select
          direction={'column'}
          alignItems={'left'}
          charAndId={'department'}
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value)
          }}
          optionsList={departmentsSorted}
        />

        <DivButton>
          <InputButton type="submit" value="Save" />
          {modaleIsOpen && <Modale hideModale={closeModale} />}
        </DivButton>
      </Form>

      {modaleIsOpen && <Modale hideModale={closeModale}/>}
    </Main>
  </>
  )
}

export default CreateEmployee


const Main = styled.main`
  background-color: ${colors.background};
  min-width: 1440px;
  height: 100vh;
  margin: auto;
  margin-top: 2.5rem;
  line-height: 1;
  padding: 1rem 1.5rem;
  border: 1px inset ${colors.secondary};
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0px 5px 20px rgb(100, 100, 100, 0.3);
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const DivInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 575px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`
const DivInputDateWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 1rem;
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 725px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`
const Legend = styled.legend`
  padding: 1rem 1rem 1rem 0;
  font-style: italic;
  font-weight: 300;
  color: ${colors.text};
`
const DivInputZipWrapper = styled.div`
  display: flex;
  width: 7rem;
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`
const FieldsetStyle = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-style: solid none solid none;
  border-width: 1px;
  border-color: ${colors.textLight};
  padding-bottom: 1rem;
`
const DivButton = styled.div`
  display: flex;
  justify-content: center;
`
const InputButton = styled.input`
  width: 10rem;
  padding: 0.5rem 1.5rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  background-color: ${colors.secondary};
  color: white;
  text-align: center;
  cursor: pointer;
  border-radius: 0.25rem;
  &:hover {
    background-color: ${colors.primary};
    box-shadow: 0px 5px 20px rgb(100, 100, 100, 0.3);
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`