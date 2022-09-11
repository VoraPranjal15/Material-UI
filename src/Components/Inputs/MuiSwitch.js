import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

function MuiSwitch() {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark"
        control={<Switch checked={checked} onChange={(e) => handleChange(e)} />}
      />
      <FormControlLabel
        label="Dark"
        control={
          <Switch
            checked={checked}
            size="small"
            color="info"
            onChange={(e) => handleChange(e)}
          />
        }
      />
    </Box>
  );
}

export default MuiSwitch;
