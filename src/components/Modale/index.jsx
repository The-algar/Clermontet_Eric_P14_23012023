import React from 'react'
import styled from 'styled-components'
import close from '../../assets/close.svg'

const Modale = ({hideModale}) => {
  return (
    <ModaleDiv>
      <ModaleContent>
        <p>Employee Created !</p>
        <IMG src={close} alt="close" onClick={hideModale} />
      </ModaleContent>
    </ModaleDiv>
  )
}

export default Modale

const ModaleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: auto;
`
const ModaleContent = styled.div`
  width: 10rem;
  height: auto;
  background-color: white;
  position: absolute;
  top: 40vh;
  padding: 1rem;
  border-radius: 0.8rem;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
`
const IMG = styled.img`
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`