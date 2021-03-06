import React, { useEffect } from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  makeStyles,
} from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import {
  IconButton,
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  Button,
  Avatar,
  Grid,
} from "@material-ui/core";
import { amber } from "@material-ui/core/colors";
import * as actions from "../actions";
import { useDispatch, useSelector } from "react-redux";

import {
  LibraryBooksRounded,
  CreateRounded,
  FaceSharp,
  EqualizerRounded,
  ListRounded,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      background: "#ffffff94",
      backdropFilter: "blur(8px)",
      color: "#1b1a1a",
    },
  },
  avatar: {
    color: theme.palette.getContrastText(amber[500]),
    backgroundColor: amber[500],
    marginRight: 10,
  },
  button: {
    textAlign: "center",
    margin: 4,
    padding: 4,
    fontWeight: 600,
    fontSize: 16,
  },
  action: {
    textAlign: "center",
    margin: 4,
    padding: 4,
  },
}));
const styles = (theme: Theme) =>
  createStyles({
    root: {
      zIndex: 2,
      margin: 0,
      padding: theme.spacing(2),
      color: "#1b1a1a",
      minHeight: 180,
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    subtitle: {
      color: "#1b1a1a",
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
  image: string;
}

const MuiDialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, image, ...other } = props;
  return (
    <>
      <DialogTitle
        disableTypography
        className={classes.root}
        {...other}
        style={{
          background: `url(${image})`,
          objectFit: "cover",
          backgroundPosition: "center center",
          filter: "brightness(0.9)",
          backgroundRepeat: "no-repeat",
        }}
      >
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <Typography
        variant="h5"
        style={{
          position: "absolute",
          top: 50,
          left: 10,
          textShadow: "rgb(0 0 0 / 40%) 0px 3px 3px",
          color: "white",
          zIndex: 2,
        }}
      >
        {children}
      </Typography>
    </>
  );
});

const MuiDialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    //background: '#182437',
    color: "#1b1a1a",
  },
}))(DialogContent);
const MuiDialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    display: "block",
  },
}))(DialogActions);

export interface CustomizedDialogsProps {
  open: boolean;

  data: any;
  isCurriculum: boolean;
}

export default function CustomizedDialogs({
  open,

  data,
  isCurriculum,
}: CustomizedDialogsProps) {
  const dispatch = useDispatch();
  const handleClose = () => {
    const action = actions.clearDialog();
    dispatch(action);
  };

  useEffect(() => {
    if (isCurriculum) {
      const action = actions.loadCurriculumsCourse(data.id);
      dispatch(action);
    }
    // eslint-disable-next-line
  }, []);
  const { curriculumscourse } = useSelector((state: any) => state.course);
  const navToPage = () => {
    const action = actions.clearDialog();
    dispatch(action);
    if (isCurriculum) {
      const action = actions.loadCurriculumsView(data.id);
      dispatch(action);
    } else {
      const action = actions.loadCourseView(data.id);
      dispatch(action);
    }

    window.open(data.link, "_blank");
  };
  const classes = useStyles();
  return (
    <div>
      <Dialog
        key={"course-dialog-props" + data.name}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        className={classes.root}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <MuiDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          image={data.thumbNail}
        >
          {data.name}
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          {isCurriculum && (
            <div>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
              >
                <Grid item>
                  <Avatar className={classes.avatar}>
                    <ListRounded />
                  </Avatar>
                </Grid>
                <Grid item>
                  <h2>รายวิชาในหลักสูตร</h2>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
              >
                {curriculumscourse.map((item: any, index: number) => (
                  <Grid item key={index}>
                    {item.code} {item.name}
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <Avatar className={classes.avatar}>
                <LibraryBooksRounded />
              </Avatar>
            </Grid>
            <Grid item>
              <h2>เป้าหมายการเรียนรู้</h2>
            </Grid>
          </Grid>

          <div className={`color:'#90a0aa',fontWeigth:300`}>
            <div dangerouslySetInnerHTML={{ __html: data.learningObjective }} />
          </div>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <Avatar className={classes.avatar}>
                <CreateRounded />
              </Avatar>
            </Grid>
            <Grid item>
              <h2>ประเด็นการเรียนรู้</h2>
            </Grid>
          </Grid>

          <div dangerouslySetInnerHTML={{ __html: data.learningTopic }} />

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <Avatar className={classes.avatar}>
                <FaceSharp />
              </Avatar>
            </Grid>
            <Grid item>
              <h2>กลุ่มเป้าหมาย</h2>
            </Grid>
          </Grid>

          <div dangerouslySetInnerHTML={{ __html: data.targetGroup }} />

          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item>
              <Avatar className={classes.avatar}>
                <EqualizerRounded />
              </Avatar>
            </Grid>
            <Grid item>
              <h2>วิธีการประเมินผล</h2>
            </Grid>
          </Grid>

          <div dangerouslySetInnerHTML={{ __html: data.assessment }} />
        </MuiDialogContent>
        <MuiDialogActions className={classes.action}>
          <Button onClick={navToPage} className={classes.button}>
            เข้าเรียน
          </Button>
        </MuiDialogActions>
      </Dialog>
    </div>
  );
}
