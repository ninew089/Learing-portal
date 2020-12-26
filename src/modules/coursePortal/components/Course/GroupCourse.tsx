import React from 'react'
import { Grid, Divider, Box, Container } from '@material-ui/core'
import Course2 from './CourseDetails'
import queryString from 'query-string'

import {data} from 'data/couredetail'
import { useLocation } from 'react-router-dom'
export default function SingleLineGridList(props: any) {

  const { search } = useLocation()
  const { category } = queryString.parse(search)
  return (
    <Box p={2}>
      <div>
        <Grid container direction="row" alignItems="center">
          <Container maxWidth="lg">
            <h2>{category}</h2>
          </Container>
        </Grid>
        <Divider style={{ marginBottom: 20 }} />

        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            spacing={3}
          >
            {data.map((tile) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                
                <Course2
                  data={tile.title}
                  logo={tile.logo}
                  int={tile.int}
                  view={tile.view}
                  point={tile.point}
                  vote={tile.vote}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </Box>
  )
}
