import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState<string>("");
  return (
    (<Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Filled text field" variant="filled"></TextField>
        <TextField label="Outlined text field" variant="outlined"></TextField>
        <TextField label="Standard text field" variant="standard"></TextField>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small primary"
          size="small"
          color="primary"
        ></TextField>
        <TextField
          label="Small secondary"
          size="small"
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
          helperText={value ? 'Do not share your pass' : 'Required'}
        ></TextField>
        <TextField
          label="Password"
          type="password"
          helperText="Do not show pass"
        ></TextField>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="end">$</InputAdornment>,
            }
          }}
        ></TextField>
        <TextField
          label="Weight"
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }
          }}
        ></TextField>
      </Stack>
    </Stack>)
  );
};
