import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { employeesListSuccess } from '../../Redux/actions/actionGetEmployees'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const dateRegex = /[0-9]{4}-[0-9]{2}-[0-9]{2}/

function dynamicSortUp(property) {
  return function compare(a, b) {
    if (dateRegex.test(a[property]) === true) {
      let dateA = new Date(a[property])
      let dateB = new Date(b[property])
      return dateA < dateB ? -1 : dateA === dateB ? 0 : 1
    } else {
      let stringA = a[property].split(' ').join('')
      a = stringA.toLowerCase()
      let stringB = b[property].split(' ').join('')
      b = stringB.toLowerCase()
      return a < b ? -1 : a === b ? 0 : 1
    }
  }
}

function dynamicSortDown(property) {
  return function compare(a, b) {
    if (dateRegex.test(a[property]) === true) {
      let dateA = new Date(a[property])
      let dateB = new Date(b[property])
      return dateA < dateB ? 1 : dateA === dateB ? 0 : -1
    } else {
      let stringA = a[property].split(' ').join('')
      a = stringA.toLowerCase()
      let stringB = b[property].split(' ').join('')
      b = stringB.toLowerCase()
      return a < b ? 1 : a === b ? 0 : -1
    }
  }
}

const Sorts = ({ id }) => {
  const employees = useSelector((state) => state.getEmployees.employees)
  const dispatch = useDispatch()

  const handleClickUp = (e) => {
    e.preventDefault()
    const fullId = e.target.id
    const id = fullId.split('-')[0]
    const newEmmployeesList = Array.from(employees).sort(
      dynamicSortUp(`${id}`)
    )
    dispatch(employeesListSuccess(newEmmployeesList))
  }
  const handleClickDown = (e) => {
    e.preventDefault()
    const fullId = e.target.id
    const id = fullId.split('-')[0]
    const newEmmployeesList = Array.from(employees).sort(
      dynamicSortDown(`${id}`)
    )
    dispatch(employeesListSuccess(newEmmployeesList))
  }

  return (
    <IconsDiv id={id}>
      <IconButton
        id={`${id}-iconUp`}
        className="fas fa-caret-up"
        onClick={handleClickUp}
      ></IconButton>
      <IconButton
        id={`${id}-iconDown`}
        className="fas fa-caret-down"
        onClick={handleClickDown}
      ></IconButton>
    </IconsDiv>
  )
}

export default Sorts

export const IconsDiv = styled.div`
display: flex;
flex-direction: column;
padding: 0 .8rem;
`
export const IconButton = styled.button`
background-color: ${colors.background};
color: rgba(0, 0, 0, .4);
&:hover {
  background-color: ${colors.background};
  opacity: 0.5;
}
&:focus {
  color: ${colors.primary};
}
`