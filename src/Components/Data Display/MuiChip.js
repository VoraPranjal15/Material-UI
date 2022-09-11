import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import {useState} from 'react'
function MuiChip() {
  const [chips, setChips] = useState(['chip 1', 'chip 2', 'chip 3'])
  const handleDelete = (chipToDelete)=>{
    setChips(chips=>chips.filter(chip=>chip!==chipToDelete))
  }
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="chip" color="primary" />
      <Chip label="chip" color="primary" icon={<FaceIcon />} />
      <Chip label="chip" color="error" size="small" />
      <Chip label="chip outlined" color="info" variant="outlined" />
      <Chip
        label="chip outlined"
        color="info"
        variant="outlined"
        avatar={<Avatar>PV </Avatar>}
      />
      <Chip
        label="OnClick"
        color="secondary"
        onClick={() => alert("clicked")}
      />
      <Chip label='delete' color="error" onClick={()=>alert('clicked')}
      onDelete={()=>alert('Delete Handler called')}/>
      {
        chips.map(chip=>(
          <Chip key={chip} label={chip} onDelete={()=>handleDelete(chip)}/>
        ))
      }
    </Stack>
  );
}

export default MuiChip;
