import React from 'react';
import {Box,Grid,Hidden, Button, Container,useMediaQuery,IconButton,Avatar} from '@material-ui/core';

import Courses from './Courses'
import { createStyles, makeStyles, Theme ,useTheme} from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        
        width:80
      },
      [theme.breakpoints.only('xs')]:{
        width:60
      }
    },menus:{
        paddingLeft:30,
        borderRadius:'0 0 10px 10px',
        background: '#ffffff',
        [theme.breakpoints.only('xs')]:{
            justify:'center',
            placeContent:'center'
          }

    },
    large: {
        width: theme.spacing(6),
        height: theme.spacing(6),
      },
      text: {
      
       
        overflow: 'hidden',
        display: '-webkit-box',
        textOverflow: 'ellipsis',
        fontSize: 10,
    

        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
      },
      line:{
        display:'inline-block',
        borderBottom:'3px solid #f9b122',
        paddingBottom:'2px'
      },button:{
        float: 'right'
      }
   
  }),
);



export default function PointNavigationMenu(){
    const classes = useStyles();
    const [index, setIndex] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const handleClick = (i:any )=> (e: React.SyntheticEvent) => {


      setIndex(i);
  
    };
    const handleOpen = ( )=> () => {
        setOpen(!open);
      };
    const catagory=[ 'สำนักงาน ก.พ.',
       'การจัดการ',
   'ภาษา',
       'ทักษะด้านสังคม' 
   ,'วิทยาศาสตร์และเทคโนโลยี',
  'คอมพิวเตอร์',
     'เศรษฐศาสตร์'
    ,'การเมืองการปกครอง' ,
   'กฎหมาย' ,
  'ศิลปะในการสื่อสาร' ,
   'การศึกษา' ,
  'จิตวิทยา',
   'ประวัติศาสตร์และโบราณคดี',
       'ศาสนาและปรัชญา',
      'ศิลปะและดนตรี',
 'สุขภาพ อาหาร ออกกำลังกาย ป้องกันรักษาโรค',
 'ครอบครัว สัตว์เลี้ยง งานอดิเรก']
 const theme = useTheme();
 const xs = useMediaQuery(theme.breakpoints.only('xs'));
 const sm = useMediaQuery(theme.breakpoints.only('sm'));
 const md = useMediaQuery(theme.breakpoints.only('md'));
 const lg = useMediaQuery(theme.breakpoints.only('lg'));
 const getSize=()=>{
   if(xs){
     return 'xs'
   }
   if(sm){
     return 'sm'
   }
   if(md){
     return 'md'
   }
   if(lg){
     return 'lg'
   }
 


 }
 const renderCatagoryXs = () => {
   
    return catagory.map((name, index) => {
        if (open===false){
            if (index < 10) {
                return (
                    <IconButton onClick={handleClick(index)} className={classes.root} disableRipple>
                    <Grid container direction="row" alignItems="center" justify='center'>
                   
                  <Avatar alt={name} src="/static/images/avatar/1.jpg" className={classes.large} />
                
                  <Grid className={classes.text}>
                  {name}
                  </Grid>
                </Grid>
                </IconButton>
                );
              }

        }
        if (open===true){
        return(    
        <IconButton onClick={handleClick(index)} className={classes.root} disableRipple>
        <Grid container direction="row" alignItems="center" justify='center'>
        <Grid container direction="row" alignItems="center" justify='center'>
      <Avatar alt={name} src="/static/images/avatar/1.jpg" className={classes.large} />
      </Grid>
      <Grid className={classes.text}>
      {name}
      </Grid>
    </Grid>
    </IconButton>)
        }

    });
  };



    return (
        <>
 <div style={{marginTop:20 ,background:'white',color:'rgb(19 39 64)',borderRadius:10}}>
 <Box p={2}fontWeight={900} style={{marginTop:20 ,background:'white',color:'rgb(19 39 64)'}} fontSize="h4.fontSize" >
หมวดหมู่
<Hidden smUp> 

<Button  onClick={handleOpen()} className={classes.button}>
เพิ่มเติม
    </Button>

</Hidden>
 </Box>
 <Container className={classes.menus}  maxWidth={getSize()}>

 <Hidden xsDown>
          {catagory.map((name, i) => (
       
     
    <IconButton onClick={handleClick(i)} className={classes.root} disableRipple>

    <Grid container direction="row" alignItems="center" justify='center'>
    <Grid container direction="row" alignItems="center" justify='center'>
  <Avatar alt={name} src="/static/images/avatar/1.jpg" className={classes.large} />
  </Grid>
  <Grid className={classes.text}>
  {name}
  </Grid>
</Grid>
</IconButton>


            ))}
                 </Hidden>
              
     <Hidden smUp>
     {renderCatagoryXs()}
         

     </Hidden>
      
      </Container>
      </div>
          <Courses id={catagory[index]}/>


          </>
    )
  }
