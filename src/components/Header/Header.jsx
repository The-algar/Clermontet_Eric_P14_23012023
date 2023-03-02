import React from 'react';
import Logo from '../../assets/whLogo.png';
import hrLogo from '../../assets/hrLogo.png';
import { Link } from 'react-router-dom';
import { StyledLink } from '../../utils/style/Slinks'
import styled from 'styled-components'

/**show Header  
 * @returns {JSX}
 */

export default function Header() {
  return ( 
      <header className='header'>
        <NavContainer>
          <Link to="/">
              <NavLogoImage src={Logo} alt="Wealth Health Logo"/>
              <h1 className="sr-only">Wealth Health</h1>
              <HRLogo src={hrLogo} alt="HRnet Logo"/>
              <h1 className="sr-only">HRnet</h1>
          </Link>
          <NavContainerItem>
            <StyledLink to="/create" className='NavContainerItem'>
            <i className="fa fa-pencil" style={{marginRight: '0.3rem'}}></i>
            Create Employee
            </StyledLink>
            <StyledLink to="/list" className="NavContainerItem">
            <i className="fa fa-user-circle" style={{marginRight: '0.3rem'}}></i>
            View Current Employees
            </StyledLink >
          </NavContainerItem>
        </NavContainer>
      </header>       
  );  
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  &.a {
    font-weight: bold;
    font-size: 2rem;
    color: #2c3e50;
  }
      &:hover {
    text-decoration: underline;
    }
    @media screen and (max-width: 768px) {
      font-weight: 200;
      font-size: 0.9rem;
      }
  `
const NavContainerItem = styled.h3`
  text-decoration: none;
  margin-right: 0.7rem;
    &.a {
    font-size: 2rem;
    }
    &:hover {
    text-decoration: underline;
    }

`
const NavLogoImage = styled.img`
    height: 100px;
    max-width: 100%;
`
const HRLogo = styled.img`
    padding-left: 50px;
    padding-bottom: 2rem;
    width: 240px;
    height: 40px;
`
    