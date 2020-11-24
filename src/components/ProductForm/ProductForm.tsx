import React from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "formik-material-ui";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useStyles } from "./ProductFormStyle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import LinearProgress from "@material-ui/core/LinearProgress";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Formik, Form, Field } from "formik";
import { DatePicker } from "formik-material-ui-pickers";

interface TypeProps {
  openDialog: boolean;
  setOpenDialog: (a: boolean) => void;
  title: string;
}
interface Values {
  name: string;
  rowPrice: string;
  price: string;
  code: string;
  color: string;
  category: string;
  productDes: string;
  stockCount: string;
  expDate: string;
}
export default function ProductForm(props: TypeProps) {
  const { openDialog, setOpenDialog, title } = props;

  const handleClose = () => {
    setOpenDialog(false);
  };
  const id = Math.random();
  const initialValue = {
    id: id,
    name: "",
    rowPrice: "",
    price: "",
    code: "",
    color: "c1",
    category: "",
    productDes: "",
    stockCount: "",
    expDate: new Date(),
  };
  const classes = useStyles();
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Formik
          initialValues={initialValue}
          validate={(values) => {
            const errors: Partial<Values> = {};
            if (!values.name) {
              errors.name = "Required";
            }
            if (values.price === "") {
              errors.price = "Required";
            } else if (+values.price <= 0) {
              errors.price = "the price should be more than zero";
            } else if (+values.price < +values.rowPrice) {
              errors.price = "Price should be greater than Row Price";
            }
            if (!values.rowPrice) {
              errors.rowPrice = "Required";
            }
            if (!values.code) {
              errors.code = "Required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              alert(JSON.stringify(values, null, 2));
            }, 2000);
          }}
        >
          {({ submitForm, isSubmitting, touched, errors, setFieldValue }) => (
            <Dialog
              open={openDialog}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
              fullWidth={true}
              maxWidth="sm"
            >
              <DialogTitle id="form-dialog-title">{title}</DialogTitle>
              <DialogContent>
                <Form>
                  <Box margin={2}>
                    <InputLabel id="name">Name</InputLabel>
                    <Field
                      component={TextField}
                      type="text"
                      name="name"
                      fullWidth
                    />
                  </Box>

                  <Box margin={2}>
                    <InputLabel id="rowPrice">Row Price</InputLabel>
                    <Field
                      component={TextField}
                      type="text"
                      name="rowPrice"
                      select
                      fullWidth
                    >
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                    </Field>
                  </Box>
                  <Box margin={2}>
                    <InputLabel id="price">Price</InputLabel>
                    <Field
                      component={TextField}
                      type="number"
                      name="price"
                      fullWidth
                    />
                  </Box>
                  <Box margin={2}>
                    <InputLabel id="code">Code</InputLabel>
                    <Field
                      component={TextField}
                      type="text"
                      name="code"
                      fullWidth
                    />
                  </Box>
                  <Box margin={2}>
                    <div>Choose color to display in POS</div>
                    <br />
                    <div className={classes.colors}>
                      <div
                        className="c1"
                        onClick={() => setFieldValue("color", "c1")}
                      >
                        C1
                      </div>
                      <div
                        className="c2"
                        onClick={() => setFieldValue("color", "c2")}
                      >
                        C2
                      </div>
                      <div
                        className="c3"
                        onClick={() => setFieldValue("color", "c3")}
                      >
                        C3
                      </div>
                      <div
                        className="c4"
                        onClick={() => setFieldValue("color", "c4")}
                      >
                        C4
                      </div>
                      <div
                        className="c5"
                        onClick={() => setFieldValue("color", "c5")}
                      >
                        C5
                      </div>
                      <div
                        className="c6"
                        onClick={() => setFieldValue("color", "c6")}
                      >
                        C6
                      </div>
                      <div
                        className="c7"
                        onClick={() => setFieldValue("color", "c7")}
                      >
                        C7
                      </div>
                    </div>
                  </Box>
                  <Box margin={2}>
                    <div>Image</div>
                    <input type="file" />
                  </Box>

                  <Box margin={2}>
                    <InputLabel id="categoryList">Category List</InputLabel>
                    <Field
                      component={TextField}
                      type="text"
                      name="category"
                      select
                      fullWidth
                    >
                      <MenuItem value={"c1"}>category 1</MenuItem>
                      <MenuItem value={"c2"}>category 2</MenuItem>
                      <MenuItem value={"c3"}>category 3</MenuItem>
                    </Field>
                  </Box>
                  <Box margin={2}>
                    <InputLabel id="productDes">Product Description</InputLabel>
                    <Field
                      component={TextField}
                      type="text"
                      name="productDes"
                      multiline
                      rows={5}
                      fullWidth
                    />
                  </Box>
                  <Box margin={2}>
                    <InputLabel id="stockCount">Stock Count</InputLabel>
                    <Field
                      component={TextField}
                      type="text"
                      name="stockCount"
                      fullWidth
                    />
                  </Box>
                  <Box margin={2}>
                    <Field
                      component={DatePicker}
                      name="date"
                      label="Exp. Date"
                      format="dd/MM/yyyy"
                      fullWidth
                    />
                  </Box>
                </Form>
                {isSubmitting && <LinearProgress />}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={submitForm} color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </Formik>
      </MuiPickersUtilsProvider>
    </div>
  );
}
