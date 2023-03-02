import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { NavLink } from 'react-router-dom'

const HeaderTabs = () => {
  return (
    <div>
      <NavStyled>
        <TabLink to="/Create">
          Create Employee
        </TabLink>
        <TabLink to="/List">
          List Employees
        </TabLink>
      </NavStyled>
    </div>
  )
}

export default HeaderTabs

export const NavStyled = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1440px;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
`
export const TabLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    font-size: 1.3rem;
    text-align: center;
    font-family: Roboto !important;
    font-weight: bold;
    background-color: ${colors.primary};
    border-radius: 0.25rem 0.25rem 0px 0px;
    color: ${colors.text};
    border-bottom: 2px inset #bfc8d3;

    &.active, &.active:hover {
      background-color: ${colors.background};
      color: ${colors.txt};
      border-top: 2px inset #bfc8d3;
      border-left: 2px inset #bfc8d3;
      border-right: 2px inset #bfc8d3;
      border-bottom: none;
    }
    &:hover {
      background-color: ${colors.secondary}
    }
  }
`