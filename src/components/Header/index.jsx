import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import LoginLogoutButton from "../Login";

/**show Header
 * @returns {JSX}
 */

export default function Header() {
  return (
    <HeaderWrapper>
      <NavContainer>
        <Link to="/">
          <Logo src={Logo} width={100} height={100} alt="Wealth Health Icon" />
          <h1 className="sr-only">Wealth Health</h1>
          {/* <WHTitle>Wealth Health</WHTitle> */}
        </Link>
        <Link to="/">
          <HRnetTitle>HRnet</HRnetTitle>
          <h1 className="sr-only">HRnet</h1>
        </Link>
        <div>
          <LoginLogoutButton />
        </div>
      </NavContainer>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  background-color: ${colors.primary};
  padding: 2rem;
  z-index: 2;
  box-shadow: 0px 5px 20px rgb(100, 100, 100, 0.3);
  min-width: 450px;
`;
const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  font-family: "Alegreya Sans SC";
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    & p {
      padding-top: 1rem;
    }
  }
  @media screen and (max-width: 450px) {
    gap: 1.5rem;
  }
`;
const HRnetTitle = styled.h3`
    font-family= Balthazar !important;
    margin: 0px;
    font-weight: bold;
    font-size: 3em;
    color: ${colors.negativeTxt};
      @media screen and (max-width: 768px) {
        padding-top: 1rem;
        }
`;
