import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

interface typeProps {
  openDialog: boolean;
  setOpenDialog: (a: boolean) => void;
  title: string;
  buttonId: number;
}
export default function AddCategoryForm(props: typeProps) {
  const { openDialog, setOpenDialog, title, buttonId } = props;

  const handleClose = () => {
      console.log(buttonId)
    setOpenDialog(false);
  };

  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>Category Name</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            placeholder={title==="Add Category" ?"Add Category":"Edit Category" }
            type="email"
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
