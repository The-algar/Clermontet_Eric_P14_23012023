// IMPORTS // ______________________________________________________________

import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import colors from "../../utils/style/colors";

/**
 * Component to display current/selected entries out of total entries.
 * @name EntriesDisplayed
 * @param {object} props
 * @returns {?JSX}
 */

// JSX // _________________________________________________________________

const EntriesDisplayed = (props) => {
  return (
    <div>
      {props.page > props.fullPages ? (
        <p>
          Showing <Span>{props.firstDataOnPage + 1}</Span> to <Span>{props.length}</Span> of{" "}
          <Span>{props.length}</Span> entries
        </p>
      ) : (
        <p>
          Showing <Span>{props.firstDataOnPage + 1}</Span> to{" "}
          <Span>{props.lastDataOnPage}</Span> of <Span>{props.length}</Span> entries
        </p>
      )}
    </div>
  );
};

// PROPTYPES // ___________________________________________________________

EntriesDisplayed.propTypes = {
  page: PropTypes.number.isRequired,
  fullPages: PropTypes.number.isRequired,
  firstDataOnPage: PropTypes.number.isRequired,
  lastDataOnPage: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired
}

// EXPORT // ______________________________________________________________

export default EntriesDisplayed

// CSS // _________________________________________________________________

const Span = styled.span`
  font-weight: bold;
  color: ${colors.text};
  font-size: 1.1rem;
`;
