import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    (<Box sx={{
      width: "250px"
    }}>
      <TextField
        label="Select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        slotProps={{ select: { multiple: true } }}
        size="small"
        color="success"
        helperText="please select asdf"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>)
  );
};
