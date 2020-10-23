import React from 'react'
import PropTypes from 'prop-types'
//@ts-ignore
import MaskedInput from 'react-text-mask'

import { Input, InputLabel, FormControl } from '@material-ui/core'

function TextMaskCustom(props:any) {
  const { inputRef, ...other } = props

  return (
    <MaskedInput
      {...other}
      ref={(ref:any) => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={['O', 'C', 'S', 'C', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  )
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
}

export default function FormattedInputs() {
  const [values, setValues] = React.useState({
    textmask: 'OCSC',
  })

  const handleChange = (event:any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="formatted-text-mask-input">
        รหัสผู้ใช้ (OCSC ตามด้วยตัวเลข 6 หลัก)
      </InputLabel>
      <Input
        value={values.textmask}
        onChange={handleChange}
        name="textmask"
        id="formatted-text-mask-input"
        inputComponent={TextMaskCustom}
      />
    </FormControl>
  )
}
