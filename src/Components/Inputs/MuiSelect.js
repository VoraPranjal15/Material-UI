import { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
function MuiSelect() {
  const [country, setCountry] = useState({ val: "" });
  const [countryArr, setCountryArr] = useState([]);
  console.log(country);
  console.log(countryArr);
  return (
    <>
      <Box width="250px">
        <TextField
          label="Select Country"
          value={country.val}
          select
          onChange={(e) => setCountry({ val: e.target.value })}
          fullWidth
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
      <br />
      <Box width="250px">
        <TextField
          label="Select Country"
          value={countryArr}
          select
          onChange={(e) => setCountryArr(countryArr.concat(e.target.value))} // setCount(count+1)
          fullWidth
          SelectProps={{ multiple: true }}
          size="small"
          color="success"
          helperText="Please select the country whose citizenship you hold"
          required={countryArr.length === 0 ? true : false}
          error={countryArr.length === 0 ? true : false}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
        </TextField>
      </Box>
    </>
  );
}

export default MuiSelect;
