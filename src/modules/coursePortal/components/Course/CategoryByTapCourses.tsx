import React from 'react'
import { Grid, Divider, Box, Button } from '@material-ui/core'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import categoryFormat from 'utils/categoryFormat'

import CourseCarousel from 'shared/Carousel/Carousel'
export default function SingleLineGridList(props: any) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      line: {
        display: 'inline-block',
        borderBottom: '3px solid #f9b122',
        paddingBottom: '2px',
      },
      button: {
        float: 'right',
      },
      box: {
        borderRadius: '0 0 10px 10px',
        marginBottom: 10,
        paddingBottom: 10,
        width: '100%',
        marginTop: 10,
        position:"relative"
      },
    }),
  )
  const { id } = props


  const history = useHistory()
  const { path } = useRouteMatch()
  const filterCoursebyCategory = (title: string) => {
    history.push(`${path}/course?category=${categoryFormat(title)}`)
  }
  const Next = () => {
    setTimeout(() => filterCoursebyCategory(id), 1000)
  }
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
        zeroMinWidth
      >
        <h3 className={classes.line}>{categoryFormat(id)}</h3>{' '}
        <Button onClick={Next} style={{ color: '#0f1626' }}>
          {' '}
          ดูเพิ่มเติม
        </Button>
      </Grid>
      <Divider style={{ marginBottom: 20 }} />

      <div style={{width:20,display:'flex' }}>
        <CourseCarousel isCurriculum={false}/>

    </div>
    </Box>
  )
}
