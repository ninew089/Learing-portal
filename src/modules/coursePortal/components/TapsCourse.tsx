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
        width:`${window.screen.width/6}px`,
      },
      [theme.breakpoints.only('sm')]:{
        width:`${window.screen.width/10}px`,
      }
    },menus:{
       width:'100%',
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
      },box:{
        [theme.breakpoints.only('xs')]:{
          marginInlineStart:`${window.screen.width/30}px`
        }
        
       
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
 const checkOpen=()=>{
  if (xs||sm){
   if (open){
     return 'inherit'
   }
   else{
     return 'hidden'
   }
  }
 }
 const checkOpenHight=()=>{
   if (xs||sm){
    if (open){
      return ''
    }
    else{
      return `180px`
    }
   }

}
const Select=(number:number)=>{
  if(number===index){
    return '#f9b122'
  }

}
const SelectWeight=(number:number)=>{
  if(number===index){
    return 'bold'
  }

}


 const renderCatagoryXs = () => {
   
    return catagory.map((name, index) => {
        if (open===false){
            if (index < 14) {
                return (
                    <IconButton onClick={handleClick(index)} className={classes.root} disableRipple>
                    <Grid container direction="row" alignItems="center" justify='center'>
                   <Grid item>
                   <Avatar alt={name} src="/static/images/avatar/1.jpg" className={classes.large} />
                   </Grid>
                  
          
                  <Grid className={classes.text} style={{color:Select(index),fontWeight:SelectWeight(index)}}>
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
      <Grid className={classes.text} style={{color:Select(index),fontWeight:SelectWeight(index)}}>
       
        {name}
   

      </Grid>
    </Grid>
    </IconButton>)
        }

    });
  };



    return (
        <>
         <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
 <div style={{padding:10,background:'white',color:'rgb(19 39 64)',borderRadius:10,width:'100%'}}>
 <Box p={2}fontWeight={700} style={{ background:'white',color:'rgb(19 39 64)'}} fontSize="h4.fontSize" >
หมวดหมู่
<Hidden mdUp> 

<Button  onClick={handleOpen()} className={classes.button}>
{open?"แสดงน้อยลง":"แสดงเพิ่มเติม"}
    </Button>

</Hidden>
 </Box>
 <Container fixed  >
 <Grid container direction="row" justify="flex-start" alignItems="center" className={classes.box} style={{overflowY:checkOpen(),height:checkOpenHight()}} >
  

 <Hidden smDown>
       
          {catagory.map((name, i) => (
       
     
    <IconButton onClick={handleClick(i)} className={classes.root} disableRipple>

    <Grid container direction="row" alignItems="center" justify='center'>
    <Grid container direction="row" alignItems="center" justify='center'>
  <Avatar alt={name} src="/static/images/avatar/1.jpg" className={classes.large} />
  </Grid>
  <Grid className={classes.text} style={{color:Select(i),fontWeight:SelectWeight(i)}}>
  {name}
  </Grid>
</Grid>
</IconButton>


            ))}
        
                 </Hidden>
                      
     <Hidden mdUp>
     {renderCatagoryXs()}
         

     </Hidden>
     
    
      </Grid>
      </Container>
     
      <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>

          <Courses id={catagory[index]}/>
          </Grid>
           </div>
          </Grid>

          </>
    )
  }
