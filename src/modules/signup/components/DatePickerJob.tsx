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
    "& .MuiFormHelperText-root.Mui-error ": {
      color: "ff533d",
      fontWeight: 600,
      borderWidth: "1px",
    },
    "& .MuiInput-underline.Mui-error:after": {
      borderColor: "ff533d",
      borderWidth: "1px",
    },
    "& label.MuiFormLabel-root": {
      fontWeight: 600,
      "&:after .Mui-error": {
        borderColor: "#ff533d",
        borderWidth: "1px",
      },
    },
    "& label.Mui-focused": {
      color: "#132740",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.secondary.main,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.secondary.main,
        borderWidth: "1px",
      },
      "&:hover fieldset": {
        borderColor: "#a8c6ff",
        borderWidth: "3px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#a8c6ff",
        borderWidth: "3px",
      },
      "&.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ff533d",
        borderWidth: "1px",
      },
    },
  },
}));
function DateFnsLocalizationExample(props: any) {
  const { title, register, name } = props;
  var date = new Date();
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
        animateYearScrolling
        label={`${title}`}
        clearable
        openTo="year"
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
