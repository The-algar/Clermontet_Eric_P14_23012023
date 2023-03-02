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

const Pagination = (props) => {
  // console.log(page)
  // console.log(pageCount)
  // console.log(pageCountRange)
  return (
    <DivPagination>
      {props.page === 1 ? (
        <TextNoButton>Previous</TextNoButton>
      ) : (
        <ButtonText
          onClick={() => {
            props.setPage(props.page - 1);
          }}
        >
          Previous
        </ButtonText>
      )}

      {props.pageCountRange.map((index) => {
        if (
          props.page === props.pageCountRange[index + 1] ||
          props.page - 1 === props.pageCountRange[index]
        ) {
          return (
            <ButtonNumber
              backgroundColor={colors.primary}
              color="white"
              key={index + 1}
              onClick={(e) => {
                props.setPage(index + 1);
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
                props.setPage(index + 1);
              }}
            >
              {index + 1}
            </ButtonNumber>
          );
        }
      })}

      {props.page === props.pageCount ? (
        <TextNoButton>Next</TextNoButton>
      ) : (
        <ButtonText
          onClick={(e) => {
            props.setPage(props.page + 1);
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
  background-color: ${(props) => props.mainBgColor};
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
