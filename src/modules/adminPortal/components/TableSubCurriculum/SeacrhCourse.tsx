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
    { name: 'หลักสูตร 1' },
    { name: 'หลักสูตร 2' },
    { name: 'หลักสูตร 3' },
    { name: 'หลักสูตร 4' },
  ])
  const loading = open && options.length === 0
  const course = [
    { name: 'รายวิชา 1' },
    { name: 'รายวิชา 2' },
    { name: 'รายวิชา 3' },
    { name: 'รายวิชา 4' },
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
    // eslint-disable-next-line
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
          label="ค้นหาหลักสูตร"
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
