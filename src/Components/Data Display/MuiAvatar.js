import { Stack, Avatar, AvatarGroup } from "@mui/material";
import React from "react";

function MuiAvatar() {
  return (
    <Stack spacing={4}>
      <Stack spacing={1} direction="row">
        <Avatar sx={{ bgcolor: "primary.light" }}>NM</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>BW </Avatar>
      </Stack>
      <Stack spacing={1} direction="row">
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>NM</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>BW </Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          >
            NM
          </Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="John Doe"
          >
            BW{" "}
          </Avatar>
        </AvatarGroup>
        <img src="https://randomuser.me/api/portraits/women/79.jpg" />
        <img src="https://randomuser.me/api/portraits/men/51.jpg" />
      </Stack>
      <Stack spacing={1} direction="row">
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
        >
          NM
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "success.light", width: 48, height: 48 }}
        >
          BW{" "}
        </Avatar>
      </Stack>
    </Stack>
  );
}

export default MuiAvatar;
