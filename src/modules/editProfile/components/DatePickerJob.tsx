import format from "date-fns/format";
import React, { useState } from "react";
import th from "date-fns/locale/th";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import {
  //@ts-ignore
  formatDate,
} from "react-day-picker/moment";
import { useSelector } from "react-redux";

class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date: Date) {
    return format(date, `dd MMM ${parseInt(formatDate(date, "YYYY")) + 543}`, {
      locale: this.locale,
    });
  }

  getCalendarHeaderText(date: Date) {
    return format(date, ` MMMM  ${parseInt(formatDate(date, "YYYY")) + 543}`, {
      locale: this.locale,
    });
  }

  getYearText(date: Date) {
    return format(date, `พ.ศ. ${parseInt(formatDate(date, "YYYY")) + 543}`, {
      locale: this.locale,
    });
  }
}

const useStyles = makeStyles((theme) => ({
  input: {
    color: "#0f1626",
    fontWeight: 600,
    "& .MuiInputBase-root.MuiOutlineInput-root": {
      color: "#45A29E",
      borderColor: "#757575",
      fontWeight: 600,
    },
  },
  textfield: {
    marginTop: 10,
  },
}));
function DateFnsLocalizationExample(props: any) {
  const { title, register, name } = props;
  const { data } = useSelector((state: any) => state.edit);
  let date = data[`user${data.userTypeId}`].jobStartDate;
  const [selectedDate, handleDateChange] = useState(date);
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={LocalizedUtils} locale={th}>
      <KeyboardDatePicker
        name={`${name}`}
        fullWidth
        inputVariant="outlined"
        className={classes.textfield}
        InputProps={{
          className: classes.input,
          readOnly: true,
        }}
        openTo="year"
        animateYearScrolling
        label={`${title}`}
        clearable
        format={`dd MMMM ${parseInt(formatDate(selectedDate, "YYYY")) + 543}`}
        value={selectedDate}
        //@ts-ignore
        onChange={handleDateChange}
        okLabel="ตกลง"
        cancelLabel="ยกเลิก"
        //@ts-ignore
        // eslint-disable-next-line
        clearable={false}
        inputRef={register}
      />
    </MuiPickersUtilsProvider>
  );
}

export default DateFnsLocalizationExample;
