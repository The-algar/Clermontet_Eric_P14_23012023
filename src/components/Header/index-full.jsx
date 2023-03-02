import React from 'react';
// import Logo from '../../assets/whLogo.png';
import Logo from '../../assets/iconLogo.png';
// import { Burger } from './Burger'
import { Link } from 'react-router-dom';
import { StyledLink } from '../../utils/style/Slinks'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

/**show Header  
 * @returns {JSX}
 */

export default function Header() {
  return ( 
      <HeaderWrapper>
        <NavContainer>
            <Link to="/">
                <WHLogoImage src={Logo} alt="Wealth Health Logo"/>
                <h1 className="sr-only">Wealth Health</h1>
                <WHTitle>Wealth Health</WHTitle>
            </Link>
            <Link to="/">
                <HRnetTitle>HRnet</HRnetTitle>
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
        {/* <Burger /> */}
      </HeaderWrapper>       
  );  
}

const HeaderWrapper = styled.header`
  background-color: ${colors.primary};
  z-index: 2;
  box-shadow: 0px 5px 20px rgb(100, 100, 100, 0.3);
  min-width: 700px;
`
const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-family: 'Alegreya Sans SC';
    @media screen and (max-width: 768px) {
    flex-direction: column;
      & p {
        padding-top: 1rem;
      }
    }
  `
const NavContainerItem = styled.h3`
  display: flex;
  margin-right: 0.7rem;
    &.a {
    font-size: 1.2em;
    padding: 1rem;
    }
    &:hover {
    text-decoration: underline;
    }
    @media screen and (max-width: 768px) {
        padding: 1rem;
    }
`
const WHLogoImage = styled.img`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90px;
    max-width: 100%;
`
const WHTitle = styled.p`
    font-size: 1em;
    font-weight: bold;
    padding-top: 3px;
    margin: 0;
`
const HRnetTitle = styled.p`
@+ 
    margin: 0px;
    font-weight: bold;
    font-size: 3em;
    color: ${colors.negativeTxt};
`