import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Selects = ({ selectSort, setSelectSort }) => {
  return (
    <>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 140 }}>
        <InputLabel id="demo-simple-select-standard-label">
          {selectSort === "" ? "Sort By" : ""}
        </InputLabel>
        <Select
          onChange={(e) => setSelectSort(e.target.value)}
          value={selectSort}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Title">
          <MenuItem value="titleIncrement">
            Title
            <span style={{ marginLeft: 5, fontWeight: 200, color: "gray" }}>
              (a-z)
            </span>
          </MenuItem>

          <MenuItem value="titleDecrement">
            Title
            <span style={{ marginLeft: 5, fontWeight: 200, color: "gray" }}>
              (z-a)
            </span>
          </MenuItem>

          <MenuItem value="authorIncrement">
            Author
            <span style={{ marginLeft: 5, fontWeight: 200, color: "gray" }}>
              (a-z)
            </span>
          </MenuItem>

          <MenuItem value="authorDecrement">
            Author
            <span style={{ marginLeft: 5, fontWeight: 200, color: "gray" }}>
              (z-a)
            </span>
          </MenuItem>

          <MenuItem value="dateIncrement">
            Date
            <span style={{ marginLeft: 5, fontWeight: 200, color: "gray" }}>
              earlier
            </span>
          </MenuItem>

          <MenuItem value="dateDecrement">
            Date
            <span style={{ marginLeft: 5, fontWeight: 200, color: "gray" }}>
              later
            </span>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
