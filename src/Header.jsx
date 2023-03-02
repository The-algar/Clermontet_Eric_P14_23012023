import React from 'react'
// import { Link } from 'react-router-dom'
import { NavStyled, StyledLink } from '../styles/components/header'


const Header = () => {
  return (
    <div>
      {/* <div>
        <Link to="/">
          <Title1>HRnet</Title1>
        </Link>
      </div> */}
      <NavStyled>
        <StyledLink to="/">
          Create Employee
        </StyledLink>
        <StyledLink to="/employee-list">
          Current Employees
        </StyledLink>
      </NavStyled>
    </div>
  )
}

export default Header
