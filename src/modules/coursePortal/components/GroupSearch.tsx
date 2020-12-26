import React from 'react'
import Chip from '@material-ui/core/Chip'
import { TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import {data} from 'data/couredetail'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    color: '#132740',
    background: '#ffffff',
    fontWeight: 700,
    borderRadius: 128,
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ffaf0b',
      borderWidth: '2px',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#92b6f9',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#92b6f9',
    },
  },
  autoRoot: {
    width: 400,
    maxWidth: 500,
  },
}))
export default function FixedTags({
  fixedOptions,
  value,
  setValue,
}: {
  fixedOptions: any
  value: any
  setValue: any
}) {
  const classes = useStyles()
  return (
    <>
      <Autocomplete
        classes={classes}
        multiple
        id="fixed-tags-demo"
        value={value}
        onChange={(event, newValue) => {
          setValue([
            ...fixedOptions,
            ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
          ])
        }}
        options={data}
        getOptionLabel={(option) => option.title}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              style={{ maxWidth: 100, overflowX: 'hidden' }}
              label={option.title}
              {...getTagProps({ index })}
              disabled={fixedOptions.indexOf(option) !== -1}
            />
          ))
        }
        className={classes.autoRoot}
        renderInput={(params) => (
          <TextField
            {...params}
            label="ค้นหา"
            variant="outlined"
            placeholder="เลือก"
          />
        )}
      />
    </>
  )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
