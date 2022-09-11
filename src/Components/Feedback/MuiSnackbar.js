import { Button, Snackbar, Alert, AlertProps } from "@mui/material";
import { useState, forwardRef } from "react";

function MuiSnackbar() {
  const [open, setOpen] = useState(false);
  const handleClose = (e, reason) => {
    // reason is provided by onClose event maybe
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  });
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form Submitted successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
      /> */}

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form submitted successfully
        </SnackbarAlert>
      </Snackbar>
    </>
  );
}

export default MuiSnackbar;
