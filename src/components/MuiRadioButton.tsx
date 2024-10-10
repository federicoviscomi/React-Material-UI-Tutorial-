import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

export const MuiRadioButton = () => {
  const [value, setValue] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label" error>years of asdf</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size="medium" color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio size="medium" color="info" />}
            label="3-5"
            value="3-5"
          />
          <FormControlLabel
            control={<Radio size="medium" color="warning" />}
            label="6-10"
            value="6-10"
          />
        </RadioGroup>
        <FormHelperText>Asdf?</FormHelperText>
      </FormControl>
    </Box>
  );
};
