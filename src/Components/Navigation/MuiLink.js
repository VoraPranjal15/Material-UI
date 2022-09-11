// import React from 'react'

import { Stack, Link, Typography } from "@mui/material";

function MuiLink() {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color="text.secondary">
        Secondary
      </Link>
      <Link href="#" color="secondary" underline='hover'>
        Secondary
      </Link>
      <Link href="#" color="error" underline='none' variant='body2'>
        Secondary
      </Link>
      <Typography variant='h6'>

      <Link href="#" color="error" underline='none'>
        Secondary
      </Link>
      </Typography>
    </Stack>
  );
}

export default MuiLink;
