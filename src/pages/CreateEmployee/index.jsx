import React, { useState } from 'react'
import HeaderTabs from '../../components/CreateEmployee/HeaderTabs'
import Input from '../../components/CreateEmployee/Input'
import departments from '../../datas/department'
import states from '../../datas/states.js'
import { InputLabel, InputWrapper } from '../../components/CreateEmployee/Input'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const Main = styled.main`
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
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const DivInputWrapper = styled.div`
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
export const DivInputWrapperLittle = styled.div`
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
export const FieldsetStyle = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: .5rem;
`
export const DivButton = styled.div`
  display: flex;
  justify-content: center;
`
export const InputButton = styled.input`
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
export const SelectStyle = styled.select`
  padding: 5px;
  border-radius: 0.25rem;
  border: 2px inset ${colors.secondary};
  background-color: white;
  &:hover,
  &:focus {
    background-color: rgba(188, 140, 242, 0.1);
  }
  &:focus-visible {
    outline: none;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
`

const CreateEmployee = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [startDate, setStartDate] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const departmentSorted = departments.sort()
  const USAStates = states

  return (
    <>
    
    <Main>
      <HeaderTabs />
      <Form>
        <DivInputWrapper >
          <Input
            direction={'column'}
            charAndId={'first name'}
            inputType={'text'}
            value={firstName} // || 'Enter First Name'
            onChange={(e) => {
              setFirstName(e.target.value)
            }}
          />
          <Input
            direction={'column'}
            charAndId={'last name'}
            inputType={'text'}
            value={lastName} //  || 'Enter Last Name'
            onChange={(e) => {
              setLastName(e.target.value)
            }}
          />
        </DivInputWrapper>
        <DivInputWrapperLittle>
          <Input
            direction={'column'}
            charAndId={'date-of-birth'}
            inputType={'date'}
            value={dateOfBirth}
            onChange={(e) => {
              setDateOfBirth(e.target.value)
            }}
          />
          <Input
            direction={'column'}
            charAndId={'start-date'}
            inputType={'date'}
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value)
            }}
          />
        </DivInputWrapperLittle>

        <FieldsetStyle>
          <legend>Address</legend>
          <DivInputWrapper>
            <Input
              direction={'column'}
              charAndId={'street'}
              inputType={'text'}
              value={street} //  || 'Enter Street Name'
              onChange={(e) => {
                setStreet(e.target.value)
              }}
            />
            <Input
              direction={'column'}
              charAndId={'city'}
              inputType={'text'}
              value={city} // || 'Enter City Name'
              onChange={(e) => {
                setCity(e.target.value)
              }}
            />
          </DivInputWrapper>

          <InputWrapper direction={'column'}>
            <InputLabel htmlFor="state">State</InputLabel>
            <SelectStyle name="state" id="state">
              {USAStates.map((state, index) => {
                return (
                  <option key={index} value={state.abbreviation}>
                    {state.name}
                  </option>
                )
              })}
            </SelectStyle>
          </InputWrapper>

          <DivInputWrapperLittle>
            <Input
              direction={'row'}
              charAndId={'zip-code'}
              inputType={'number'}
              value={zipCode}
              onChange={(e) => {
                setZipCode(e.target.value)
              }}
            />
          </DivInputWrapperLittle>
        </FieldsetStyle>

        <InputWrapper direction={'column'}>
          <InputLabel htmlFor="department">Department</InputLabel>
          <SelectStyle name="department" id="department">
            {departmentSorted.map((department, index) => {
              return (
                <option key={index} value={department}>
                  {department}
                </option>
              )
            })}
          </SelectStyle>
        </InputWrapper>
        <DivButton>
          <InputButton type="submit" value="Save" />
        </DivButton>
      </Form>

      <div id="confirmation-modale"></div>
    </Main>
  </>
  )
}

export default CreateEmployee
