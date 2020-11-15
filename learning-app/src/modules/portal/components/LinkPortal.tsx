import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import img from '../../../assets/logo/logo1.jpg'
import img2 from '../../../assets/logo/logo2.png'
import img3 from '../../../assets/logo/logo3.png'
import img4 from '../../../assets/logo/logo4.png'
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
            icon={<Avatar src={img4} className={classes.rounded}></Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar className={classes.rounded}>1</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar className={classes.rounded}>2</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar className={classes.rounded}>3</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar className={classes.rounded}>4</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar className={classes.rounded}>5</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar className={classes.rounded}>6</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar className={classes.rounded}>7</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar className={classes.rounded}>8</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar className={classes.rounded}>9</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar className={classes.rounded}>10</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar className={classes.rounded}>11</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar className={classes.rounded}>12</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar className={classes.rounded}>13</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar className={classes.rounded}>14</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar className={classes.rounded}>15</Avatar>}
            onClick={handleClickOpen}
          />
          <Tab
            icon={<Avatar className={classes.rounded}>16</Avatar>}
            onClick={handleClickOpen}
          />
        </Tabs>
      </div>
      <Dialog open={open} setOpen={setOpen} />
    </>
  )
}
