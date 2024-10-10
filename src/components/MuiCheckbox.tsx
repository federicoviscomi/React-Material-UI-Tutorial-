import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const skill = event.target.value;
    const index = skills.indexOf(skill);
    if (index < 0) {
        setSkills([...skills, skill]);
    } else {
        setSkills(skills.filter(s => s !== skill));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept Jesus as my lord and saviour"
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        ></Checkbox>
      </Box>
      <Box>
        <FormLabel>SKills</FormLabel>
        <FormGroup row>
          <FormControlLabel
            label="Asdf1"
            control={<Checkbox size='large' color='primary' value='asdf1' onChange={handleSkillChange} />}
          />
          <FormControlLabel
            label="Fdsa2"
            control={<Checkbox size='small' color='secondary' value='fdsa2' onChange={handleSkillChange} />}
          />          
        </FormGroup>
        <FormHelperText>This is a form helper text asdf</FormHelperText>
      </Box>
    </Box>
  );
};
