import React from "react";
import WhLogo from "../../components/Logo/whLogo";
import styled from "styled-components";
import colors from "../../utils/style/colors";

// JSX // _________________________________________________________________

/**
 * Homepage component to display website's homepage
 * @name Home
 * @returns {?JSX}
 */

export default function Home() {
  return (
    <>
      <LoginCard>
        <WhLogo width={200} height={200} alt="logo_wealth" />
        <p>Welcome to HRnet</p>
      </LoginCard>
      <Claim>
        This is our company's internal application to create and view employee
        records.
      </Claim>
    </>
  );
}

// CSS // _________________________________________________________________

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Roboto;
  align-items: center;
  align-content: center;
  // // height: 100vh;
  padding: 5rem 1.5rem;
  background-color: ${colors.mainBgColor};
  @media (max-width: 425px) {
    min-width: 400px !important;
  }
`;
const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  border-radius: 30px;
  background-color: ${colors.primary};
  box-shadow: 0px 5px 15px grey;
  & p {
    font-family: Roboto !important;
    color: ${colors.negativeTxt};
    font-size: 1.5em;
    margin: 0px;
    padding-top: 10px;
  }
`;
const Claim = styled.h2`
  font-family: Roboto !important;
  padding-top: 2rem;
  font-weight: bold;
`;
