import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["asdf1", "fdsa2", "qwerty?!"];

const skillsOptions = skills.map((skill, index) => {
  return {
    id: index,
    label: skill,
  };
});

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  return (
    (<Stack spacing={2} sx={{
      width: "250px"
    }}>
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={value}
        onChange={(_, value) => setValue(value)}
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={skill}
        onChange={(_, skill) => setSkill(skill)}
      />
    </Stack>)
  );
};
