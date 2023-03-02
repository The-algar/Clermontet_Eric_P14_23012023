import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const EntriesDisplayed = ({
  page,
  fullPages,
  firstDataOnPage,
  lastDataOnPage,
  length,
}) => {
  return (
    <div>
      {page > fullPages ? (
        <p>
          Showing <Span>{firstDataOnPage + 1}</Span> to <Span>{length}</Span> of <Span>{length}</Span> entries
        </p>
      ) : (
        <p>
          Showing <Span>{firstDataOnPage + 1}</Span> to <Span>{lastDataOnPage}</Span> of <Span>{length}</Span> entries
        </p>
      )}
    </div>
  )
}

export default EntriesDisplayed

export const Span = styled.span`
  font-weight: bold;
  color: ${colors.text};
  font-size: 1.1rem;
`

