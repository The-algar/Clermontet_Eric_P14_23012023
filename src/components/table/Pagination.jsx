import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import colors from "../../utils/style/colors";

// JSX // _________________________________________________________________

/**
 * Pagination component to display the number of pages
 * @name Pagination
 * @param {object} props 
 * @returns {?JSX}
 */

const Pagination = ({ setPage, page, pageCount, pageCountRange }) => {
  // console.log(page)
  // console.log(pageCount)
  // console.log(pageCountRange)
  return (
    <DivPagination>
      {page === 1 ? (
        <TextNoButton>Previous</TextNoButton>
      ) : (
        <ButtonText
          onClick={() => {
            setPage(page - 1);
          }}
        >
          Previous
        </ButtonText>
      )}

      {pageCountRange.map((index) => {
        if (
          page === pageCountRange[index + 1] ||
          page - 1 === pageCountRange[index]
        ) {
          return (
            <ButtonNumber
              backgroundColor={colors.primary}
              color="white"
              key={index + 1}
              onClick={(e) => {
                setPage(index + 1);
              }}
            >
              {index + 1}
            </ButtonNumber>
          );
        } else {
          return (
            <ButtonNumber
              backgroundColor={colors.background}
              color={colors.text}
              key={index + 1}
              onClick={(e) => {
                setPage(index + 1);
              }}
            >
              {index + 1}
            </ButtonNumber>
          );
        }
      })}

      {page === pageCount ? (
        <TextNoButton>Next</TextNoButton>
      ) : (
        <ButtonText
          onClick={(e) => {
            setPage(page + 1);
          }}
        >
          Next
        </ButtonText>
      )}
    </DivPagination>
  );
};

// PROPTYPES // ___________________________________________________________

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  pageCountRange: PropTypes.array.isRequired,
  pageCount: PropTypes.number.isRequired
}

// EXPORT // ______________________________________________________________

export default Pagination

// CSS // _________________________________________________________________

export const DivPagination = styled.div`
  display: flex;
`;
export const ButtonNumber = styled.button`
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  width: 2rem;
  height: 2rem;
  margin: 0.4rem;
  border-radius: .5rem;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  &:hover {
    background-color: ${colors.secondary};
    color: white;
  }
}
`;
export const ButtonText = styled.button`
  text-align: center;
  padding: .4rem;
  background-color: ${colors.background};
  &:hover {
    font-weight: bold;
  }
}
`;
export const TextNoButton = styled.p`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  opacity: 0.4;
`;
