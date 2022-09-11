import { Box } from "@mui/material";
import React from "react";

function MuiResponsiveness() {
  return (
    <Box
      sx={{
        height: 300,
        width: {
          xs: 100, // above 0px screen
          sm: 200, // above 600px screen
          md: 300, // above 900px screen
          lg: 400, // above 1200px screen
          xl: 500, // above 1536px screen
        },
        bgcolor: "primary.main",
      }}
    ></Box>
  );
}

export default MuiResponsiveness;
