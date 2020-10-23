
import React, { useState } from 'react'
import format from 'date-fns/format'
import th from 'date-fns/locale/th'
import DateFnsUtils from '@date-io/date-fns'
import { KeyboardDatePicker } from '@material-ui/pickers'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

import {
  //@ts-ignore
  formatDate,
} from 'react-day-picker/moment'

class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date: Date) {
    return format(date, `${parseInt(formatDate(date, 'YYYY')) + 543}`, {
      locale: this.locale,
    })
  }

  getCalendarHeaderText(date: Date) {
    return format(date, `  ${parseInt(formatDate(date, 'YYYY')) + 543}`, {
      locale: this.locale,
    })
  }

  getYearText(date: Date) {
    return format(date, `พ.ศ. ${parseInt(formatDate(date, 'YYYY')) + 543}`, {
      locale: this.locale,
    })
  }
}
function DateFnsLocalizationExample(props: any) {
  const { title, register, name } = props
  var date = new Date()
  const [selectedDate, handleDateChange] = useState(date)


  return (
    <MuiPickersUtilsProvider utils={LocalizedUtils} locale={th}>
      <KeyboardDatePicker
        name={`${name}`}
        inputProps={{ readOnly: true }}
        views={['year']}
        animateYearScrolling
        label={`${title}`}
        clearable
        format={`${parseInt(formatDate(selectedDate, 'YYYY')) + 543}`}
        value={selectedDate}
        //@ts-ignore
        onChange={handleDateChange}
        okLabel="ตกลง"
        cancelLabel="ยกเลิก"
        //@ts-ignore
        clearable={false}
        inputRef={register}
      />
    </MuiPickersUtilsProvider>
  )
}

export default DateFnsLocalizationExample
