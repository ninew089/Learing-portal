import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect } from "react";
import axios from "axios"
import { getCookie } from 'cookie/cookie'
import { parseJwt } from "utils/getDataJWT"





export default function Asynchronous(props: any) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<any>([]);
  const loading = open && options.length === 0;

  const token = getCookie('token');
  const platformid = parseJwt(token).unique_name
  const { setValue } = props
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`/Platforms/${platformid}/Curriculums`)
        setOptions(response.data)

      } catch (err) {
        console.log(err)
      }

    }
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (

    <Autocomplete
      id="asynchronous-demo"
      clearOnEscape
      disableCloseOnSelect
      disableClearable
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}

      onChange={(event, newValue) => {
        setValue(newValue.id)
      }}
      getOptionSelected={(option: any, value: any) => String(option.name) === String(value.name)}
      getOptionLabel={(option: any) => String(option.name)}
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
                  <CircularProgress color="secondary" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />


  );
}
