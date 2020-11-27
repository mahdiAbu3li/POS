import React, { useState } from "react";
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
import DateFilter from "../DateFilter/DateFilter";
import { FilterDateFunction, TypeData } from "../Function/FilterDateFunction";
import DescriptionIcon from "@material-ui/icons/Description";
import useTable from "../CustomHook/useTable";
import ProductForm from "../ProductForm/ProductForm";
import { useStyles } from "./ProductListStyle";
type TypeDate = Date | null;

export default function ProductList() {
  const [data, setData] = useState<TypeData[]>([]);
  const [open, setOpen] = useState(false);
  const [buttonId, setButtonId] = useState(-1);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [titleForm, setTitleForm] = useState("");
  React.useEffect(() => {
    fetch("http://localhost:8000/Products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const {
    handleChangeRowsPerPage,
    handleChangePage,
    handleSort,
    handleSearch,
    applyFilter,
    order,
    orderBy,
    page,
    rowsPerPage,
    ArrayAfterSortAndSliceAndSearch,
  } = useTable(data, ["name", "code", "category", "price", "tax"]);

  const deleteRow = () => {
    return new Promise((resolve) => setTimeout(() => resolve(true), 500));
  };
  const arrayAfterDateFilter = (fromDate: TypeDate, toDate: TypeDate) => {
    applyFilter("date", (data) => FilterDateFunction(data, fromDate, toDate));
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

  const handleOpenProductForm = (title: string) => {
    setOpenDialog(true);
    setTitleForm(title);
  };
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <ProductForm
        IsOpenDialog={openDialog}
        setCloseDialog={() => setOpenDialog(false)}
        title={titleForm}
      />
      <TableContainer component={Paper} className={classes.paper}>
        <DateFilter
          onChange={(fromDate, toDate) => {
            arrayAfterDateFilter(fromDate, toDate);
          }}
        />
        <Toolbar className={classes.toolBar}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => handleOpenProductForm("Add Product")}
          >
            Add Product
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
              <TableCell key="code">
                <TableSortLabel
                  active={orderBy === "code"}
                  direction={orderBy === "code" ? order : "asc"}
                  onClick={() => {
                    handleSort("code");
                  }}
                >
                  Code
                </TableSortLabel>
              </TableCell>
              <TableCell align="left" key="name">
                <TableSortLabel
                  active={orderBy === "name"}
                  direction={orderBy === "name" ? order : "asc"}
                  onClick={() => handleSort("name")}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell align="left" key="category">
                <TableSortLabel
                  active={orderBy === "category"}
                  direction={orderBy === "category" ? order : "asc"}
                  onClick={() => handleSort("category")}
                >
                  Category
                </TableSortLabel>
              </TableCell>
              <TableCell align="left" key="description">
                <TableSortLabel
                  active={orderBy === "product_description"}
                  direction={orderBy === "product_description" ? order : "asc"}
                  onClick={() => handleSort("product_description")}
                >
                  Product&nbsp;Description
                </TableSortLabel>
              </TableCell>
              <TableCell align="left" key="tax">
                <TableSortLabel
                  active={orderBy === "tax"}
                  direction={orderBy === "tax" ? order : "asc"}
                  onClick={() => handleSort("tax")}
                >
                  Tax(%)
                </TableSortLabel>
              </TableCell>
              <TableCell align="left" key="price">
                <TableSortLabel
                  active={orderBy === "price"}
                  direction={orderBy === "price" ? order : "asc"}
                  onClick={() => handleSort("price")}
                >
                  Price
                </TableSortLabel>
              </TableCell>

              <TableCell align="left" key="expiration_date">
                <TableSortLabel
                  active={orderBy === "expiration_date"}
                  direction={orderBy === "expiration_date" ? order : "asc"}
                  onClick={() => handleSort("expiration_date")}
                >
                  Expiration Date
                </TableSortLabel>
              </TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {ArrayAfterSortAndSliceAndSearch.map((row, i) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.code}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="left">{row.product_description}</TableCell>
                <TableCell align="left">{row.tax}</TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">{row.expiration_date}</TableCell>
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
                    onClick={() => handleOpenProductForm("Edit Product")}
                  >
                    <EditIcon />
                  </Button>
                  <Button variant="outlined">
                    <DescriptionIcon />
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
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Container>
  );
}
