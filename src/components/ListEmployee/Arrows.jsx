import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

export const ArrowWrapper = styled.span`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  & svg {
    height: 0.4rem;
    padding: 0.1rem;
  }
`

const SVG = () => {
  const [color, setcolors] = useState('#BFC8D3')

  return (
    <ArrowWrapper>
      <svg viewBox="0 0 95.3 67.4">
        <polygon fill={color} points="0,67.4 47.7,0 95.3,67.4 " onClick={(e) => {
              setcolors(`${colors.primary}`)
            }}/>
      </svg>
      <svg viewBox="0 0 95.3 67.4">
        <polygon fill={color} points="0,0 47.7,67.4 95.3,0 " />
      </svg>
    </ArrowWrapper>
  )
}

export default SVG
