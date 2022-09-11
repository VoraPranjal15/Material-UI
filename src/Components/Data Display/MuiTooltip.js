// import React from 'react'

import { Tooltip, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function MuiTooltip() {
  return (
    <Stack spacing={6} direction="row">
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        {/* check what happens if one removes IconButton */}
        <DeleteIcon />
      </Tooltip>
      <Tooltip title="Delete" placement="right">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" placement="top-end" arrow>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" placement='right-end' arrow enterDelay={500} leaveDelay={300}>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export default MuiTooltip;
