import React from "react";
import styled from "styled-components";
import Select from "../Select";

const Entries = ({ value, onChange, entriesNumber }) => {
  return (
    <EntriesStyle>
      <Select
        direction={"row"}
        alignItems={"center"}
        charAndId={"show"}
        value={value}
        onChange={onChange}
        optionsList={entriesNumber}
      />
      <EntriesText>entries</EntriesText>
    </EntriesStyle>
  );
};

export default Entries;

const EntriesStyle = styled.div`
  display: flex;
  align-items: center;
  & > div {
    display: inline;
    & > label {
      font-weight: normal;
    }
  }
`;
export const EntriesText = styled.p`
  padding-left: 0.4rem;
`;
