import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Button,
  Container,
  TableSortLabel,
  TextField,
  Toolbar,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TablePagination from "@material-ui/core/TablePagination";
import AddCategoryForm from "../AddCategoryForm/AddCategoryForm";
import AddIcon from "@material-ui/icons/Add";
import {
  sortStringAndNumericArray,
  sortDateArray,
} from "../Function/sortArray";
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  paper: {
    width: "55%",
  },
  buttonAction: {
    backgroundColor: "white",
  },
  tableHeader: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
  toolBar: {
    display: "flext",
    justifyContent: "space-between",
  },
  rowStyle: {
    backgroundColor: "#FFECB3",
  },
}));
interface TypeData {
  id: number;
  category_name: string;
  created_at: string;
}
export default function BasicTable() {
  const [open, setOpen] = useState(false);
  const [buttonId, setButtonId] = useState(-1);
  const [data, setData] = useState<TypeData[]>([]);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof TypeData>("category_name");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [titleForm, setTitleForm] = useState("");

  const classes = useStyles();

  React.useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const deleteRow = () => {
    return new Promise((resolve) => setTimeout(() => resolve(true), 500));
  };

  const handleDeleteOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ConfirmDelete = () => {
    deleteRow().then((isValid) => {
      if (isValid) {
        setData(data.filter((j) => buttonId !== j.id));
      }
    });
    setOpen(false);
  };

  const sortedAndFilteredArray =
    orderBy === "created_at"
      ? sortDateArray(data, orderBy, order)
      : sortStringAndNumericArray(data, orderBy, order)
      .filter((item) =>
          item.category_name.includes(search)
        );

  const handleSort = (name: keyof TypeData) => {
    const isAsc = orderBy === name && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(name);
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const filteredArray = data.filter((item) =>
    item.category_name.includes(search)
  );

  const handleChangePage = (e: any, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e: any) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };
  const handleAddCategory = () => {
    setTitleForm("Add Category");
    setOpenDialog(true);
  };
  const handleEditCategory = (id: number) => {
    setTitleForm("Edit Category");
    setButtonId(id);
    setOpenDialog(true);
  };
  return (
    <Container>
      <AddCategoryForm
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        title={titleForm}
        buttonId={buttonId}
      />
      <TableContainer component={Paper} className={classes.paper}>
        <Toolbar className={classes.toolBar}>
          <Button
            color="primary"
            variant="outlined"
            onClick={handleAddCategory}
            startIcon={<AddIcon />}
          >
            Add Category
          </Button>

          <TextField
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.tableHeader}>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "category_name"}
                  direction={orderBy === "category_name" ? order : "asc"}
                  onClick={() => {
                    handleSort("category_name");
                  }}
                >
                  Category Name
                </TableSortLabel>
              </TableCell>
              <TableCell align="left">
                <TableSortLabel
                  active={orderBy === "created_at"}
                  direction={orderBy === "created_at" ? order : "asc"}
                  onClick={() => handleSort("created_at")}
                >
                  Created&nbsp; At
                </TableSortLabel>
              </TableCell>

              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedAndFilteredArray
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <TableRow
                  key={row.id}
                  className={i % 2 !== 0 ? classes.rowStyle : ""}
                >
                  <TableCell component="th" scope="row">
                    {row.category_name}
                  </TableCell>
                  <TableCell align="left">{row.created_at}</TableCell>
                  <TableCell align="left">
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setButtonId(row.id);
                        handleDeleteOpen();
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleEditCategory(row.id)}
                    >
                      <EditIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}

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

                <Button
                  onClick={() => {
                    ConfirmDelete();
                  }}
                  color="secondary"
                  autoFocus
                >
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredArray.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Container>
  );
}
