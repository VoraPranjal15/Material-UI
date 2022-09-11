import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";
function MuiButton() {
  const [formats, setFormats] = useState({ val: "" });
  // const [formats, setFormats] = useState([]);
  console.log(formats);
  const handleFormatChange = (e) => {
    if (e.target.value) {
      setFormats({ val: e.target.value });
      // setFormats(formats.concat(e.target.value));
    } else {
      setFormats({ val: e.target.id });
    }
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary" disableElevation>
          Secondary
        </Button>
        <Button variant="contained" color="error" disableRipple>
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" direction="row" spacing={2}>
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="outlined" endIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton aria-label="send">
          <SendIcon />
        </IconButton>
        <IconButton aria-label="send" color="info" size="large">
          <SendIcon />
        </IconButton>
        <IconButton aria-label="send" color="info" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        {/* onClick prop is to be specified to individual button */}
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="large"
          color="warning"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("Left")}> Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          // value={formats}
          value={formats.val}
          // onChange={(e) => setFormats((formats.val = e.target.value))}
          onChange={(e) => handleFormatChange(e)}
          size="medium"
          color="success"
          orientation="vertical"
        >
          {/* <IconButton value="bold">
            <FormatBoldIcon />
          </IconButton> */}
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon id="bold" />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon id="italic" />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon id="underlined" />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
