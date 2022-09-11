import { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

const skills = ["HTML", "CSS", "JS", "React", "Node"];

function MuiAutoComplete() {
  const [value, setValue] = useState(null);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Skills"
            value={value}
            onChange={(e) => handleChange(e)}
            freeSolo
          />
        )}
      />
    </Stack>
  );
}

export default MuiAutoComplete;
