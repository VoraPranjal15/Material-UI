// import React from 'react'
import { useState } from "react";
import {
  Box,
  FormControl,
  Checkbox,
  FormControlLabel,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";
import Bookmark from "@mui/icons-material/Bookmark";

function MuiCheckBox() {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState([]);
  console.log(skills);
  const handleSkills = (e) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };

  console.log(acceptTnC);
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and condition"
          control={
            <Checkbox
              checked={acceptTnC}
              onChange={(e) => setAcceptTnC(e.target.checked)}
              size="small"
              color="secondary"
            />
          }
        ></FormControlLabel>
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={acceptTnC}
          onChange={(e) => setAcceptTnC(e.target.checked)}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={(e) => handleSkills(e)}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={(e) => handleSkills(e)}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
                  value="javaScript"
                  checked={skills.includes("javaScript")}
                  onChange={(e) => handleSkills(e)}
                />
              }
            />
          </FormGroup>
          <FormHelperText>invalid selection </FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiCheckBox;
