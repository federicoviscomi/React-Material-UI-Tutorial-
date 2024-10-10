import { Rating, Stack } from "@mui/material";
import { useState } from "react";
import FavouriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavouriteIcon from "@mui/icons-material/Favorite";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.1}
        size="large"
        emptyIcon={<FavouriteBorderIcon fontSize="inherit" color="primary" />}
        icon={<FavouriteIcon fontSize="inherit" color="primary" />}
      />
    </Stack>
  );
};
