import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
function MuiTextField() {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="small error" size="small" color="error"></TextField>
        <TextField label="medium error" size="medium" color="error"></TextField>
        <TextField
          label="large error"
          size="large"
          color="secondary"
        ></TextField>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        ></TextField>
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
        ></TextField>
        <TextField
          label="Read-Only"
          InputProps={{ readOnly: true }}
        ></TextField>
      </Stack>
      <Stack direction="row" spacing={2}>
        {/* Adornments acts  like  prefixs and suffixs */}
        <TextField
          label="Amount"
          InputProps={{
            startAdorment: <InputAdornment position="start">₹</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            startAdorment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
