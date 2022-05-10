import { Input } from "@mui/material";
import { Selects } from "./Select";
import styled from "styled-components";

export const SortAndSearch = ({
  selectSort,
  setSelectSort,
  searchForm,
  setSearchForm,
}) => {
  return (
    <Fragment>
      <Selects selectSort={selectSort} setSelectSort={setSelectSort} />
      
      <Input
        value={searchForm}
        onChange={(e) => setSearchForm(e.target.value)}
        placeholder="search"
        color="secondary"
        style={{ padding: 5 }}
      />
    </Fragment>
  );
};

const Fragment = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;
`;
