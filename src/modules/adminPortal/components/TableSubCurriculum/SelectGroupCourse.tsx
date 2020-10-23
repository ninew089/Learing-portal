// *https://www.registers.service.gov.uk/registers/country/use-the-api*

import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import CircularProgress from '@material-ui/core/CircularProgress'

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

export default function Asynchronous() {
  const [open, setOpen] = React.useState(false)
  const [options, setOptions] = React.useState([
    { name: 'หมวด 1' },
    { name: 'หมวด 2' },
    { name: 'หมวด 3' },
    { name: 'หมวด 4' },
  ])
  const loading = open && options.length === 0
  interface GroupCourse {
    name: string
  }

  const course = [
    { name: 'A01 เศรษฐกิจพอเพียง' },
    { name: 'A02 เศรษฐกิจพอเพียง' },
    { name: 'A03 เศรษฐกิจพอเพียง' },
    { name: 'A04 เศรษฐกิจพอเพียง' },
    { name: 'A05 เศรษฐกิจพอเพียง' },
  ]
  React.useEffect(() => {
    let active = true

    if (!loading) {
      return undefined
    }

    ;(async () => {
      const response = await fetch(
        'https://country.register.gov.uk/records.json?page-size=5000',
      )
      await sleep(1e3) // For demo purposes.
      // eslint-disable-next-line
      const countries = await response.json()

      if (active) {
        setOptions(course)
      }
    })()

    return () => {
      active = false
    }
    // eslint-disable-next-line
  }, [loading])

  React.useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="ค้นหารายวิชา"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  )
}
