import { Rating, Stack } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function MuiRating() {
  const [value, setValue] = useState(null);
  console.log(value);
  const handleChange = (e) => {
    if (value === +e.target.value) {
      setValue(null);
    } else {
      setValue(+e.target.value);
    }
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        precision={0.5}
        onChange={(e) => handleChange(e)}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        // readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
}

export default MuiRating;
