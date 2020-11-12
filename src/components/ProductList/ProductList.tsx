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
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

// import isWithinRange from 'date-fns/is_within_range'
import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  paper: {
    width: "90%",
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
  dataFilter: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: "10px",
    "& > *": {
      marginRight: "10px",
    },
  },
  datePicker: {
    width: "140px",
    fontSize: "10px",
    margin: "0 10px",
  },
}));

export default function ProductList() {
  const [open, setOpen] = useState(false);
  const [buttonId, setButtonId] = useState(-1);
  interface typeData {
    id: number;
    code: string;
    name: string;
    category: string;
    product_description: string;
    tax: number;
    price: number;
    expiration_date: string;
  }
  type orderType = Omit<typeData, "id">;

  const [data, setData] = useState<typeData[]>([]);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof orderType>("name");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [fromDate, setFromDate] = React.useState<Date | null>(new Date());
  const [toDate, setToDate] = React.useState<Date | null>(new Date());
  // console.log(fromDate + " " + toDate)

  //   if(fromDate !== null && toDate !== null){
  //   isWithinInterval(
  //   new Date(2014, 0, 8),
  //   { start: fromDate, end: toDate }
  // );
  //   }
  const handleFromDate = (date: Date | null) => {
    setFromDate(date);
  };
  const handleToDate = (date: Date | null) => {
    setToDate(date);
  };

  React.useEffect(() => {
    fetch("http://localhost:8000/Products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
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

  const handleApplyFilter = () => {
    
  };

  const handleSort = (name: keyof orderType) => {
    const isAsc = orderBy === name && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(name);

    if (orderBy === "tax" || orderBy === "price") {
      setData(
        data.sort((a, b) => {
          if (a[orderBy] > b[orderBy]) {
            return order === "asc" ? 1 : -1;
          } else if (a[orderBy] < b[orderBy]) {
            return order === "asc" ? -1 : 1;
          }
          return 0;
        })
      );
    } else {
      setData(
        data.sort((a, b) => {
          if (a[orderBy][0] > b[orderBy][0]) {
            return order === "asc" ? 1 : -1;
          } else if (a[orderBy][0] < b[orderBy][0]) {
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

  const filteredArray = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase())
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
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TableContainer component={Paper} className={classes.paper}>
          <Toolbar className={classes.dataFilter}>
            <div>Expiration Date :</div>

            <KeyboardDatePicker
              className={classes.datePicker}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="From"
              value={fromDate}
              onChange={handleFromDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />

            <KeyboardDatePicker
              className={classes.datePicker}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="To"
              value={toDate}
              onChange={handleToDate}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <Button variant="outlined" onClick={handleApplyFilter}>
              Apply Filter
            </Button>
          </Toolbar>
          <Toolbar className={classes.toolBar}>
            <Button color="primary" variant="contained">
              Add Product
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
                    direction={
                      orderBy === "product_description" ? order : "asc"
                    }
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
              {filteredArray
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => (
                  <TableRow
                    key={row.id}
                    className={i % 2 !== 0 ? classes.rowStyle : ""}
                  >
                    <TableCell component="th" scope="row">
                      {row.code}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.category}</TableCell>
                    <TableCell align="left">
                      {row.product_description}
                    </TableCell>
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
                      <Button variant="outlined">
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
            count={filteredArray.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableContainer>
      </MuiPickersUtilsProvider>
    </Container>
  );
}
