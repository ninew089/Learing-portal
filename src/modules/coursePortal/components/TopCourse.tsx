import React from 'react'
import { Avatar, Divider } from '@material-ui/core'
import { Row, Item } from '@mui-treasury/components/flex'
import {
  Info,
  InfoTitle,
  InfoSubtitle,
  InfoCaption,
} from '@mui-treasury/components/info'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "'Prompt', san-serif",

    fontSize: 14,
    '&:hover': {
      background: '#14243b',
      color: '#e1e3e5',
    },
  },
  title: {
    overflow: 'hidden',
    fontWeight: 'bold',
    display: '-webkit-box',
    textOverflow: 'ellipsis',

    WebkitLineClamp: 2,
    fontSize: 14,
    WebkitBoxOrient: 'vertical',
  },
  content: {
    overflow: 'hidden',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    fontSize: 10,

    color: '#808080',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },

  rank: {
    fontSize: 12,
    maxWidth: 240,
    color: '#808080',
  },
}))
export default function DarkRapListItemDemo(props: any) {
  const { number, catagory, title, detail } = props
  const classes = useStyles()
  const history = useHistory()
  const navigatorTologin = () => {
    history.push('/learning-portal/login')
  }
  return (
    <>
      <Row gap={2} className={classes.root} onClick={navigatorTologin}>
        <Item>
          <Avatar
            variant={'rounded'}
            src={
              'https://shopage.s3.amazonaws.com/media/f855/580321926366_PEnByxR6Xdn7soyNMiGPG4ZPMng1N4CN4D4XvB7j.jpg'
            }
          />
        </Item>

        <Info>
          <InfoCaption className={classes.rank}>
            {number} • {catagory}
          </InfoCaption>
          <InfoTitle className={classes.title}>{title}</InfoTitle>
          <InfoSubtitle className={classes.content}>{detail}</InfoSubtitle>
        </Info>
      </Row>
      <Divider />
    </>
  )
}
