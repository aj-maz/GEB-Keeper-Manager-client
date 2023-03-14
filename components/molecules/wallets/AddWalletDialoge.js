import * as React from "react";
import { DialogTitle, Dialog, DialogActions, Button } from "@mui/material";

const emails = ["username@gmail.com", "user02@gmail.com"];

const AddWalletDialog = ({
  onClose,
  selectedValue,
  open,
  children,
  title,
  onCreate,
  actionLabel,
}) => {
  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      {children}
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={onCreate}>
          {actionLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddWalletDialog;
