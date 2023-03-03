// IMPORTS // ______________________________________________________________

import React from 'react'
// styles imports
import styled from 'styled-components'
import colors from "../../utils/style/colors";

// JSX // _________________________________________________________________

/**
 * Loader component to display a loader while loading data
 * @name Loader
 * @returns {?JSX}
 */

const Loader = () => {
  return (
    <LoaderWrapper data-testid='loader'>
      <LoaderContainer>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoaderContainer>
    </LoaderWrapper>
  )
}

// EXPORT // ______________________________________________________________

export default Loader

// CSS // _________________________________________________________________

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoaderContainer = styled.div`
  color: ${colors.primary};
  display: inline-block;
  position: relative;
  width: 5rem;
  height: 5rem;
  & div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
    @keyframes lds-spinner {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    &:after {
      content: ' ';
      display: block;
      position: absolute;
      top: 3px;
      left: 37px;
      width: 6px;
      height: 18px;
      border-radius: 20%;
      background: ${colors.primary};
    }
    &:nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
    }
    &:nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
    }
    &:nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
    }
    &:nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
    }
    &:nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
    }
    &:nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
    }
    &:nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
    }
    &:nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
    }
    &:nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
    }
    &:nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
    }
    &:nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
    }
    &:nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
    }
  }
`