import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import img from 'assets/logo/logo1.jpg'
import img2 from 'assets/logo/logo2.png'
import img3 from 'assets/logo/logo3.png'
import img5 from 'assets/logo/audit.png'
import img6 from 'assets/logo/CAT.png'
import img7 from 'assets/logo/Court of Justice.png'
import img8 from 'assets/logo/DGA.png'
import img9 from 'assets/logo/mua.png'
import img10 from 'assets/logo/nstda.png'
import img11 from 'assets/logo/opdc.png'
import img12 from 'assets/logo/parliament.png'
import img13 from 'assets/logo/Ramkhamhaeng University.png'
import img14 from 'assets/logo/Rangsit University.png'
import img15 from 'assets/logo/sripatum.png'
import img16 from 'assets/logo/Sukhothai Thammathirat.png'
import img17 from 'assets/logo/The Secretariat of the Senate.png'
import img18 from 'assets/logo/University of the Thai Chamber of Commerce.png'

import Dialog from './Dialog'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 8,
    width: '100%',
  },
  rounded: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}))

export default function VariantAvatars() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
  }
  return (
    <>
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          TabIndicatorProps={{
            style: {
              background: 'none',
            },
          }}
          indicatorColor={undefined}
          textColor="primary"
        >
          <Tab
            icon={
              <Avatar
                alt="Chula"
                src={img}
                className={classes.rounded}
                onClick={handleClickOpen}
              />
            }
          />
          <Tab
            icon={<Avatar className={classes.rounded} src={img2}></Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar src={img3} className={classes.rounded}></Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar  src={img5} className={classes.rounded}></Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar  src={img6} className={classes.rounded}>2</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar  src={img7} className={classes.rounded}>3</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar  src={img8} className={classes.rounded}>4</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar  src={img9} className={classes.rounded}>5</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar  src={img10} className={classes.rounded}>6</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar  src={img11} className={classes.rounded}>7</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar  src={img12} className={classes.rounded}>8</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar  src={img13} className={classes.rounded}>9</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar src={img14} className={classes.rounded}>10</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar  src={img15} className={classes.rounded}>11</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar  src={img16} className={classes.rounded}>12</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar  src={img17} className={classes.rounded}>13</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar  src={img18}className={classes.rounded}>14</Avatar>}
            onClick={handleClickOpen}
          />
        </Tabs>
      </div>
      <Dialog open={open} setOpen={setOpen} />
    </>
  )
}
