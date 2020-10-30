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

function createData(id: number, CategoryName: string, CreatedAt: string) {
  return { id, CategoryName, CreatedAt };
}

const rows = [
  createData(1, "mahdi", "1-12-2020"),
  createData(55, "coghurt", "4-12-2020"),
  createData(54, "d234567", "3-12-2020"),
  createData(22, "amad", "2-12-2020"),
  createData(3, "asd", "5-12-2020"),
  createData(4, "kj", "5-12-2020"),
  createData(5, "brweozen", "5-12-2020"),
  createData(6, "we", "5-12-2020"),
  createData(7, "qwqw", "5-12-2020"),
  createData(8, "nhcsk", "5-12-2020"),
  createData(9, "sdguvd", "5-12-2020"),
  createData(10, "dfghbv", "5-12-2020"),
  createData(11, "vcvb", "5-12-2020"),
  createData(12, "bnnmn", "5-12-2020"),
  createData(13, "mjmj", "5-12-2020"),
  createData(14, "aqjfg", "5-12-2020"),
];

export default function BasicTable() {
  const [open, setOpen] = useState(false);
  const [buttonId, setButtonId] = useState(-1);
  const [data, setData] = useState(rows);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const classes = useStyles();

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

  const handleSort = (name: string) => {
    const isAsc = orderBy === name && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(name);

    if (orderBy === "category") {
      setData(
        data.sort((a, b) => {
          if (a.CategoryName[0] > b.CategoryName[0]) {
            return order === "asc" ? 1 : -1;
          } else if (a.CategoryName[0] < b.CategoryName[0]) {
            return order === "asc" ? -1 : 1;
          }
          return 0;
        })
      );
    } else if (orderBy === "date") {
      setData(
        data.sort((a, b) => {
          if (a.CreatedAt[0] > b.CreatedAt[0]) {
            return order === "asc" ? 1 : -1;
          } else if (a.CreatedAt[0] < b.CreatedAt[0]) {
            return order === "asc" ? -1 : 1;
          }
          return 0;
        })
      );
    }
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const filteredArray = data.filter((item) =>
    item.CategoryName.includes(search)
  );

  const handleChangePage = (e: any, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e: any) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (
    <Container>
      <TableContainer component={Paper} className={classes.paper}>
        <Toolbar className={classes.toolBar}>
          <Button color="primary" variant="contained">
            Add Category
          </Button>

          <TextField
            // size="small"
            // label="search by category name"
            // variant="outlined"
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
                  active={orderBy === "category"}
                  direction={orderBy === "category" ? order : "asc"}
                  onClick={() => {
                    handleSort("category");
                  }}
                >
                  Category Name
                </TableSortLabel>
              </TableCell>
              <TableCell align="left">
                <TableSortLabel
                  active={orderBy === "date"}
                  direction={orderBy === "date" ? order : "asc"}
                  onClick={() => handleSort("date")}
                >
                  Created&nbsp; At
                </TableSortLabel>
              </TableCell>

              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredArray
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <TableRow
                  key={row.id}
                  className={i % 2 !== 0 ? classes.rowStyle : ""}
                >
                  <TableCell component="th" scope="row">
                    {row.CategoryName}
                  </TableCell>
                  <TableCell align="left">{row.CreatedAt}</TableCell>
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
                    <Button variant="outlined">
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
