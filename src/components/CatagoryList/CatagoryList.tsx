import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Container } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  paper: {
    width: "55%",
  },
  buttonAction: {
    backgroundColor: "white",
  },
});

function createData(CategoryName: string, CreatedAt: string) {
  return { CategoryName, CreatedAt };
}

const rows = [
  createData("Frozen yoghurt", "12-12-2020"),
  createData("Frozen yoghurt", "12-12-2020"),
  createData("Frozen yoghurt", "12-12-2020"),
  createData("Frozen yoghurt", "12-12-2020"),
];

export default function BasicTable() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleDeleteOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const ConfirmDelete = () =>{
    setOpen(false);
    
  }
  return (
    <Container>
      <TableContainer component={Paper} className={classes.paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category Name</TableCell>
              <TableCell align="left">Created&nbsp; At</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.CategoryName}>
                <TableCell component="th" scope="row">
                  {row.CategoryName}
                </TableCell>
                <TableCell align="left">{row.CreatedAt}</TableCell>
                <TableCell align="left">
                  <Button variant="outlined" onClick={handleDeleteOpen}>
                    <DeleteIcon />
                  </Button>

                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Are you sure you want to delete this record?"}
                    </DialogTitle>
                   
                    <DialogActions>
                      <Button onClick={handleClose} color="secondary">
                        Close
                      </Button>
                      <Button onClick={ConfirmDelete} color="secondary" autoFocus>
                        Confirm
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <Button variant="outlined">
                    <EditIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
