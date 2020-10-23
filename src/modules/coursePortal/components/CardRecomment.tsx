import React from 'react'

import NoSsr from '@material-ui/core/NoSsr'
import GoogleFontLoader from 'react-google-font-loader'
import TopCourse from './TopCourse'
import {  Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Column, Row, Item } from '@mui-treasury/components/flex'





const useStyles = makeStyles(() => ({
  card: {
    marginTop: '10px',
    width: '100%',
    borderRadius: 16,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
  },
  header: {
    fontFamily: 'Barlow, san-serif',
    backgroundColor: '#fff',
  },
  headline: {
    color: '#122740',
    fontSize: '1.25rem',
    fontWeight: 600,
  },
  link: {
    color: '#2281bb',
    padding: '0 0.25rem',
    fontSize: '0.875rem',
  },
  actions: {
    color: '#BDC9D7',
  },
  divider: {
    backgroundColor: '#d9e2ee',
    margin: '0 20px',
  },
}))

export const SocialCardDemo = React.memo(function SocialCard(props: any) {
  const { title } = props
  const styles = useStyles()
  const ten = [1, 2, 3, 4, 5]
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{ font: 'Barlow', weights: [400, 600] }]} />
      </NoSsr>
      <Column p={0} gap={0} className={styles.card}>
        <Row wrap p={2} alignItems={'baseline'} className={styles.header}>
          <Item stretched className={styles.headline}>
            {title}
          </Item>
        </Row>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          {ten.map((number, i) => (
            <Row wrap grow gap={2} minWidth={0}>
              <Item grow minWidth={0}>
                <TopCourse
                  number={i + 1}
                  title={'การบริหารเวลาในชีวิตประจำวัน ในยุคปัจจุบัน'}
                  catagory={'สหศึกษา'}
                  detail={
                    'การบริหารเวลาในชีวิตประจำวัน. ในการบริหารเวลาให้เป็นนั้น ต้องมีการวางแผนที่ดีก่อนไม่เช่นนั้นจะเกิดความโกลาหลขึ้นได้ และจะวุ่นวายกันไปกันใหญ่ '
                  }
                />
              </Item>
            </Row>
          ))}
        </Grid>
      </Column>
    </>
  )
})
