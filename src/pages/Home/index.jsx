import React from 'react';
import Logo from '../../assets/whLogo.png';
import styled from 'styled-components'
import colors from '../../utils/style/colors'

export default function Home() {
    return (
        <Main>
            <LoginCard>
                <HpLogo src={Logo} alt="logo_wealth" />
                <p>Welcome to  HRnet</p>
            </LoginCard>
            <Claim>This is our company's internal application to create and view employee records.</Claim>
        </Main>
    )
}

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem 1.5rem;
  background-color: ${colors.mainBgColor};
  @media (max-width: 425px) {
    min-width: 400px !important;
  }
`
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
      color: ${colors.negativeTxt};
      font-size: 1.5em;
      margin: 0px;
      padding-top: 10px;
    }
`
const HpLogo = styled.img`
    height: 200px;
`
const Claim = styled.h2`
    padding-top: 2rem;
    font-weight: bold;
`