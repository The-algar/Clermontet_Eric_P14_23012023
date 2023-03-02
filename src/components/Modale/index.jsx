import React from "react"
import styled from "styled-components"
import close from "../../assets/close.svg"
import colors from "../../utils/style/colors"
import { useKeyPress } from "../../utils/useKeyPress"

const Modal = (props) => {
  useKeyPress('Escape', (props.hideModal))
  return (
<ModaleDiv style={props.styleModalBackground} onClick={props.hideModal} animation={props.animation} >
      <ModaleContent style={props.styleModal} animation={props.animation} >
        <Content style={props.styleModalContent}>{props.children}</Content>
        {props.closeButton && <IMG src={close} alt="close" onClick={props.hideModal} />}
      </ModaleContent>
    </ModaleDiv>
  )
}

export default Modal

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
  overflow: auto;
  background: rgba(0, 0, 0, 0.8);
  ${(props) =>
    props.animation && {
      animation: 'fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
    }}
  @keyframes fadeIn {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.8);
    }
  }
`
const ModaleContent = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: white;
  top: 40vh;
  ${(props) =>
    props.animation && {
      transform: 'translateX(-1500px)',
      animation:
        'roadRunnerIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
    }}
  @keyframes roadRunnerIn {
    0% {
      transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
    }
    70% {
      transform: translateX(30px) skewX(0deg) scaleX(0.9);
    }
    100% {
      transform: translateX(0px) skewX(0deg) scaleX(1);
    }
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${colors.text};
  line-height: 1.5rem;
`
export const IMG = styled.img`
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`
