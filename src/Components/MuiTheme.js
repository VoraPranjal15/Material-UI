import { Box, styled } from "@mui/material";

const StyledBox1 = styled(Box)(({ theme }) => ({
  width: "250px",
  height: "250px",
  backgroundColor: theme.status.danger,
}));
const StyledBox2 = styled(Box)(({ theme }) => ({
  width: "250px",
  height: "250px",
  backgroundColor: theme.palette.neutral.main,
}));
const StyledBox3 = styled(Box)(({ theme }) => ({
  width: "250px",
  height: "250px",
  backgroundColor: theme.palette.neutral.darker,
}));
function MuiResponsiveness() {
  return (
    <>
      <Box
        sx={{
          height: 300,
          width: {
            xs: 100, // above 0px screen
            sm: 200, // above 600px screen
            md: 300, // above 900px screen
            lg: 400, // above 1200px screen
            xl: 500, // above 1536px screen
          },
          bgcolor: "secondary.main",
        }}
      ></Box>
      <StyledBox1 />
      <StyledBox2 />
      <StyledBox3 />
    </>
  );
}

export default MuiResponsiveness;
