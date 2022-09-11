import React from "react";
import { Typography } from "@mui/material";
export const MuiTypography = () => {
  return (
    <div>
      {/* they carries symantic elements in them */}
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub Title 1</Typography>
      <Typography variant="subtitle2">Sub Title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        voluptatibus maiores, distinctio beatae iusto reiciendis? Laboriosam aut
        quidem dignissimos et reprehenderit obcaecati voluptatibus placeat
        officia culpa consequatur? Cupiditate, assumenda cumque.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, animi
        consequatur. Nulla perspiciatis voluptatum ex in voluptas nemo
        assumenda? Tempore eius quae facilis aliquid magni commodi repudiandae
        pariatur laboriosam officiis.
      </Typography>
    </div>
  );
};
