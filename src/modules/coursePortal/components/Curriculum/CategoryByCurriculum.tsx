import React from 'react'
import { Grid, Divider, Box, Button } from '@material-ui/core'

import { useHistory, useRouteMatch } from 'react-router-dom'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'


import CurriculumCarousel from 'shared/Carousel/Carousel'

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
        paddingRight: 8,
        marginBottom: 10,
        paddingBottom: 10,
        width: '100%',
        marginTop: 10,
      },
    }),
  )

  //const { id } = props
  const { title } = props
  const history = useHistory()
  const { path } = useRouteMatch()
  const filterCoursebyCategory = (title: string) => {
    history.push(`${path}/curriculum?category=${title}`)
  }
  const Next = () => {
    setTimeout(() => filterCoursebyCategory('หลักสูตร'), 1000)
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
        <Box
          p={2}
          fontWeight={700}
          style={{ color: 'rgb(19 39 64)' }}
          fontSize="h4.fontSize"
        >
          {title}
        </Box>
        <Button onClick={Next} style={{ color: '#0f1626' }}>
          {' '}
          ดูเพิ่มเติม
        </Button>
      </Grid>
      <Divider style={{ marginBottom: 20 }} />

      <Grid
        container
        direction="row"
        alignItems="center"
        justify={'center'}

      >
       <CurriculumCarousel isCurriculum={true}/>
      </Grid>
    </Box>
  )
}
