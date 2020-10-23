import React from 'react'
import { Grid, Box, Container } from '@material-ui/core'
import CourseList from './CourseList'
import Portal from 'modules/portal/components/LinkPortal'
import Relation from 'modules/relationPortal/components/Relation'
import Facebook from 'modules/facebook/components/FaceBook'
import { SocialCardDemo } from './CardRecomment'
import CourseDetail from './CourseDetails-v2'
import GroupSearch from './GroupSearch'

import TapsCourse from './TapsCourse'
export default function Course() {

  //const [search, setSearch] = React.useState('')
  const fixedOptions: any[] = []
  const [value, setValue] = React.useState([...fixedOptions])

  return (
    <div>
      <Relation />

      <Box
        p={2}
      >
        <Container maxWidth='lg'>
          <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
            <GroupSearch
              value={value}
              fixedOptions={fixedOptions}
              setValue={setValue}
            />
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Portal />
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            {value.length === 0 ? (
              ''
            ) : (
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <h2>ผลการค้นหา</h2>
              </Grid>
            )}

            {value.map((number: number, i: number) => (
              <Grid
                container
                justify="center"
                alignItems="center"
                xs={12}
                sm={6}
                md={3}
                lg={3}
                style={{ margin: 4 }}
              >
                <CourseDetail
                  data={value[i].title}
                  logo={value[i].logo}
                  int={value[i].int}
                  view={value[i].view}
                  point={value[i].point}
                  vote={value[i].vote}
                />
              </Grid>
            ))}
          </Grid>
          {/* รายการยอดฮิต แบะ recomment */}

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <SocialCardDemo title={'อันดับยอดฮิต'} />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <SocialCardDemo title={'รายการแนะนำ'} />
            </Grid>
          
            <Grid item xs={12} >
            <TapsCourse/>
        
            </Grid>
          
          <Grid item xs={12}>
            <CourseList title={'หลักสูตร'} name={''} type={2} />
          </Grid>
          <Grid   container
                justify="center"
                alignItems="center"
                xs={12}
                sm={12}
                md={12}
                lg={12}
          >
          
 
 <Facebook />


          </Grid>
          </Grid>
     
            

         
          
     
        </Container>
      </Box>
  
    </div>
  )
}
