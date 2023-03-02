import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeaderTabs from '../../components/CreateEmployee/HeaderTabs'
import Input from '../../components/CreateEmployee/Input'
import departments from '../../datas/department'
import states from '../../datas/states'
import { InputLabel, InputWrapper } from '../../components/CreateEmployee/Input'
import { createNewEmployee } from '../../Redux/actions/newCreateEmployee'
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
  const [zipCode, setZipCode] = useState('')
  const [state, setState] = useState('')
  const [department, setDepartment] = useState('')

  const departmentSorted = departments.sort()
  console.log(departmentSorted);
  const USAStates = states

  const [modaleIsOpen, setModaleIsOpen] = useState(false)
  const closeModale = () => {
    setModaleIsOpen(false)
  }

  const dispatch = useDispatch()

  const employee = useSelector((state) => state.newEmployee.employee)
  console.log(employee)
  const newEmployee = {
    firstName: firstName,
    lastName: lastName,
    dateOfBirth: dateOfBirth,
    startDate: startDate,
    street: street,
    city: city,
    state: state,
    zipCode: zipCode,
    department: department
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createNewEmployee(newEmployee))
    setModaleIsOpen(true)
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

          <InputWrapper direction={'column'}>
            <InputLabel htmlFor="state">State</InputLabel>
            <SelectStyle
              name="state"
              id="state"
              onChange={(e) => {
                setState(e.target.value)
              }}
            >
              {USAStates.map((state, index) => {
                return (
                  <option key={index} value={state.abbreviation}>
                    {state.name}
                  </option>
                )
              })}
            </SelectStyle>
          </InputWrapper>

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

        <InputWrapper direction={'column'}>
          <InputLabel htmlFor="department">Department</InputLabel>
          <SelectStyle
            name="department"
            id="department"
            onChange={(e) => {
              setDepartment(e.target.value)
            }}
          >
            {departmentSorted.map((department, index) => {
              return (
                <option key={index} value={department.name}>
                  {department.name}
                </option>
              )
            })}
          </SelectStyle>
        </InputWrapper>
        <DivButton>
          <InputButton type="submit" value="Save" />
        </DivButton>
      </Form>

      {modaleIsOpen && <Modale hideModale={closeModale}/>}
    </Main>
  </>
  )
}

export default CreateEmployee


const Main = styled.main`
  background-color: #eeeeee;
  max-width: 1440px;
  margin: auto;
  margin-top: 2.5rem;
  line-height: 1;
  padding: 1rem 1.5rem;
  border: 1px inset ${colors.background};
  border-radius: 0.25rem;
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
const SelectStyle = styled.select`
  padding: 5px;
  border-radius: 0.25rem;
  border: 1px inset ${colors.background};
  background-color: white;
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