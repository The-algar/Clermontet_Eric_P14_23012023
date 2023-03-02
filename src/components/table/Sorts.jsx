import React from 'react'
import { useDispatch } from 'react-redux'
import { dynamicSortDown } from '../../utils/dynamicSortDown'
import { dynamicSortUp } from '../../utils/dynamicSortUp'
import { employeesListSuccess } from '../../Redux/actions/actionGetEmployees'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Sorts = ({ id, list }) => {
  const dispatch = useDispatch()

  const handleClickUp = (e) => {
    e.preventDefault()
    const fullId = e.target.id
    const id = fullId.split('-')[0]
    const newEmmployeesList = Array.from(list).sort(dynamicSortUp(`${id}`))
    dispatch(employeesListSuccess(newEmmployeesList))
  }
  const handleClickDown = (e) => {
    e.preventDefault()
    const fullId = e.target.id
    const id = fullId.split('-')[0]
    const newEmmployeesList = Array.from(list).sort(dynamicSortDown(`${id}`))
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