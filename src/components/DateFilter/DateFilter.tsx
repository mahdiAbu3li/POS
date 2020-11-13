import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Toolbar, Button } from "@material-ui/core";
import { useStyles } from "../ProductList/ProductList";
interface TypeOnChange {
  onChange: () => void;
}
function DateFilter({ onChange }: TypeOnChange) {
  const [fromDate, setFromDate] = React.useState<Date | null>(new Date());
  const [toDate, setToDate] = React.useState<Date | null>(new Date());
  const classes = useStyles();
  const handleFromDate = (date: Date | null) => {
    setFromDate(date);
  };
  const handleToDate = (date: Date | null) => {
    setToDate(date);
  };
  const handleApplyFilter = () => {
    onChange();
  };
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Toolbar className={classes.dataFilter}>
          Expiration Date
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
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default DateFilter;
