import React from "react";

import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Button,
  Toolbar,
  Grid,
  Divider,
  Box,
} from "@material-ui/core";
import profilepicture from "assets/images/user.svg";
import Information from "./Information";
import TypeSelect from "./TypeSelect";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import * as actions from "../actions";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "shared/SnackBar/SnackBar"
import info from "utils/formatInfomation"

const useStyles = makeStyles((theme) => ({
  paper: {
    background: "white",
    borderRadius: "10px",
    padding: "24px",
    marginTop: 40,
  },
  submit: {
    marginTop: "10px",
    borderRadius: 20,
    padding: 10,
    background: "#ff533d",
    color: "#fdfdfd",
    "&:hover": {
      background: "#ff533d",
      color: "#fdfdfd",
    },
  },
  large: {
    align: "center",
    [theme.breakpoints.only("xs")]: {
      width: theme.spacing(18),
      height: theme.spacing(18),
    },
    [theme.breakpoints.only("sm")]: {
      width: theme.spacing(18),
      height: theme.spacing(18),
    },
    [theme.breakpoints.only("md")]: {
      width: theme.spacing(18),
      height: theme.spacing(18),
    },
    [theme.breakpoints.only("lg")]: {
      width: theme.spacing(24),
      height: theme.spacing(24),
    },
  },
  form: {
    marginTop: 10,
  },
  textfiled: {
    marginTop: 4,
  },
}));

export default function Edit(props: any) {
  const classes = useStyles();
  const { data } = props
  // eslint-disable-next-line
  const [types, setType] = React.useState<string>("");
  // eslint-disable-next-line
  const [mistry, setMistry] = React.useState<string>("");




  const accountForm = useForm({
    mode: "onChange",
    defaultValues: {
      title: data.title,
      name: data.firstName,
      lastname: data.lastName,
      email: data.email,
      // birthyear: "2560",
      gender: data.gender,
      educationid: data.educationId,
      usertypeid: data.userTypeId,
      OccupationId: data[`user${data.userTypeId}`].occupationId,
      workPlace: data[`user${data.userTypeId}`].workplace,
      jobTitle: data[`user${data.userTypeId}`].jobTitle,
      MinistryId: data[`user${data.userTypeId}`].ministryId,
      jobLevelid: data[`user${data.userTypeId}`].jobLevelId,
      DepartmentId: data[`user${data.userTypeId}`].departmentId,
      Division: data[`user${data.userTypeId}`].division,
      jobtypeId: data[`user${data.userTypeId}`].jobTypeId,
      stateEnterprisid: data[`user${data.userTypeId}`].stateEnterpriseId,
      jobLevel: data[`user${data.userTypeId}`].jobLevel,
    },
    validationSchema: yup.object().shape({
      title: yup.string().required("กรุณากรอกคำนำหน้า"),
      name: yup.string().required("กรุณากรอกชื่อ"),
      lastname: yup.string().required("กรุณากรอกนามสกุล"),
      birthyear: yup.string().required(),
      gender: yup.string().required("กรุณาเลือกเพศ"),
      educationid: yup.string().required("กรุณาเลือกระดับการศึกษา"),
      email: yup
        .string()
        .required("กรุณากรอกอีเมล")
        .email("กรุณากรอกอีเมลให้ถูกต้อง"),

      usertypeid: yup.string().required("กรุณาเลือกประเภท"),

      jobtypeId: yup.string().when("usertypeid", {
        is: (usertypeid) => {
          setType(usertypeid);
          switch (usertypeid) {
            case "1":
              return true;
            case "2":
              return true;
            case "3":
              return true;
            case "5":
              return false;
            case "4":
              return false;
          }
        },
        then: yup.string().required("กรุณาเลือกประเภทตำแหน่ง"),
        otherwise: yup.string().nullable(),
      }),
      jobTitle: yup.string().when("usertypeid", {
        is: (usertypeid) => {
          switch (usertypeid) {
            case "1":
              return true;
            case "2":
              return true;
            case "3":
              return true;
            case "5":
              return true;
            case "4":
              return true;
          }
        },
        then: yup.string().required("กรุณากรอกตำแหน่ง"),
        otherwise: yup.string().nullable(),
      }),
      jobLevelid: yup.string().when("usertypeid", {
        is: (usertypeid) => {
          switch (usertypeid) {
            case "1":
              return true;
            case "2":
              return false;
            case "3":
              return false;
            case "5":
              return false;
            case "4":
              return false;
          }
        },
        then: yup.string().required("กรุณาเลือกระดับ"),
        otherwise: yup.string().nullable(),
      }),

      jobLevel: yup.string().when("usertypeid", {
        is: (usertypeid) => {
          switch (usertypeid) {
            case "1":
              return false;
            case "2":
              return true;
            case "3":
              return true;
            case "5":
              return false;
            case "4":
              return false;
          }
        },
        then: yup.string().required("กรุณาเลือกประเภท"),
        otherwise: yup.string().nullable(),
      }),

      jobStartDate: yup.string().when("usertypeid", {
        is: (usertypeid) => {
          switch (usertypeid) {
            case "1":
              return true;
            case "2":
              return true;
            case "3":
              return true;
            case "5":
              return false;
            case "4":
              return true;
          }
        },
        then: yup.string().required("กรุณาเลือกปี"),
        otherwise: yup.string().nullable(),
      }),

      MinistryId: yup.string().when("usertypeid", {
        is: (usertypeid) => {
          switch (usertypeid) {
            case "1":
              return true;
            case "2":
              return true;
            case "3":
              return true;
            case "5":
              return false;
            case "4":
              return false;
          }
        },
        then: yup.string().required("กรุณาเลือกกระทรวงที่สังกัด"),
        otherwise: yup.string().nullable(),
      }),

      DepartmentId: yup
        .string()
        .nullable()
        .when(["usertypeid", "MinistryId"], {
          is: (usertypeid, MinistryId) => {
            setMistry(MinistryId);
            switch (usertypeid) {
              case "1":
                return true;
              case "2":
                return true;
              case "3":
                return true;
              case "5":
                return false;
              case "4":
                return false;
            }
          },
          then: yup.string().required("กรุณาเลือกกรมที่สังกัด"),
          otherwise: yup.string().nullable(),
        }),
      Division: yup.string().when("usertypeid", {
        is: (usertypeid) => {
          switch (usertypeid) {
            case "1":
              return true;
            case "2":
              return true;
            case "3":
              return true;
            case "4":
              return false;
            case "5":
              return false;
          }
        },
        then: yup.string().required("กรุณากรอกชื่อส่วนราชการที่สังกัด"),
        otherwise: yup.string().nullable(),
      }),
      OccupationId: yup.string().when(["usertypeid", "MinistryId"], {
        is: (usertypeid) => {
          switch (usertypeid) {
            case "1":
              return false;
            case "2":
              return false;
            case "3":
              return false;
            case "5":
              return true;
            case "4":
              return false;
          }
        },
        then: yup.string().required("กรุณากรอกเลือกอาชีพ"),
        otherwise: yup.string().nullable(),
      }),
      workPlace: yup.string().when("usertypeid", {
        is: (usertypeid) => {
          switch (usertypeid) {
            case "1":
              return false;
            case "2":
              return false;
            case "3":
              return false;
            case "5":
              return true;
            case "4":
              return false;
          }
        },
        then: yup.string().required("กรุณากรอกเลือกอาชีพ"),
        otherwise: yup.string().nullable(),
      }),
      stateEnterprisid: yup.string().when("usertypeid", {
        is: (usertypeid) => {
          switch (usertypeid) {
            case "1":
              return false;
            case "2":
              return false;
            case "3":
              return false;
            case "5":
              return false;
            case "4":
              return true;
          }
        },
        then: yup.string().required("กรุณากรอกเลือกอาชีพ"),
        otherwise: yup.string().nullable(),
      }),
    }),
  });



  const dispatch = useDispatch();





  const onSubmitData = (data: any) => {
    const preinfo = info(data);

    const action = actions.loadEdit(preinfo);
    dispatch(action);

  };

  const { message, severity } = useSelector((state: any) => state.infomation);


  return (
    <>
      {
        message !== null && <Snackbar
          message={message
          }
          open={message !== null ? true : false}
          severity={severity}
        />
      }

      <Container component="main" maxWidth="sm" className={classes.paper}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Box fontWeight="fontWeightBold" fontSize={24} textAlign="center">
            {" "}
            โปรไฟล์
          </Box>

          <Grid container direction="row" justify="center" alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src={profilepicture}
              className={classes.large}
            />

            <Grid item xs={12}>
              <Box fontWeight="fontWeightBold" fontSize={18} textAlign="center">
                {" "}
                {data.title}{data.firstName} {data.lastName}
              </Box>
              <Toolbar />
              <Divider variant="middle" />
            </Grid>
          </Grid>

          <Divider variant="middle" />

          <Grid item xs={12} sm={12}>
            <form
              className={classes.form}
              onSubmit={accountForm.handleSubmit(onSubmitData)}
            >
              {/*ข้อมลู */}
              <Information formProps={accountForm} />
              <TypeSelect formProps={accountForm} />
              <Button type="submit" fullWidth className={classes.submit}>
                บันทึก
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>

    </>
  );
}


