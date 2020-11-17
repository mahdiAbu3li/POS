import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Toolbar, Button } from "@material-ui/core";
import { useStyles } from "../ProductList/ProductList";
type FromAndTo = Date | null;
interface TypeOnChange {
  onChange: (fromDate: FromAndTo, toDate: FromAndTo) => void;
}
interface TypeFromTo {
  fromDate: FromAndTo;
  toDate: FromAndTo;
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

  const handleApplyFilter = ({ fromDate, toDate }: TypeFromTo) => {
    onChange(fromDate, toDate);
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
            format="dd/MM/yyyy"
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
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="To"
            value={toDate}
            onChange={handleToDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <Button variant="outlined" onClick={() => handleApplyFilter({fromDate , toDate})}>
            Apply Filter
          </Button>
        </Toolbar>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default DateFilter;
