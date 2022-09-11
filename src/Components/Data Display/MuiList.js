// import React from 'react'

import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

function MuiList() {
  return (
    <Box sx={{ width: 400, bgcolor: "#efefef" }}>
      <List>
        
        <ListItem>
          <ListItemButton disableGutters>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 1" secondary="Secondary text" />
          </ListItemButton>
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 2" />
        </ListItem>
        <Divider/>
        <ListItem>
          <ListItemText primary="List item 3" />
        </ListItem>
      </List>
    </Box>
  );
}

export default MuiList;
