// skip this file not implemented, this is incomplete.
import { DatePicker } from "@mui/lab";

import { Stack, TextField } from "@mui/material";
import { useState } from "react";
function MuiDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  console.log({ selectedDate });
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        renderInput={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue) => {
          setSelectedDate(newValue);
        }}
      />
    </Stack>
  );
}

export default MuiDatePicker;
