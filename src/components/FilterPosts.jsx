import { SortAndSearch } from "./SortAndSearch";
import styled from "styled-components";

export const FilterPosts = ({
  selectSort,
  setSelectSort,
  searchForm,
  setSearchForm,
  setVisibleModal,
}) => {
  return (
    <Fragment>
      <SortAndSearch
        selectSort={selectSort}
        setSelectSort={setSelectSort}
        searchForm={searchForm}
        setSearchForm={setSearchForm}
      />

      <button className="btn"
        onClick={() => setVisibleModal(true)}>
        Add Post
      </button>
    </Fragment>
  );
};

const Fragment = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
