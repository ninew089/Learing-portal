import React from "react";
import Snackbar from "shared/SnackBar/SnackBar"
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Account from "./Account";
import Information from "./Information";
import TypeSelect from "./TypeSelect";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import * as actions from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { info } from "utils/formatInfomation"
import { accountFormProps } from "../typescript"
//import ShowInfoDialog from "./ShowInfo/ShowInfoDialog"
const useStyles = makeStyles((theme) => ({
  paper: {
    background: "white",
    borderRadius: " 10px",
    padding: "10px",
    marginTop: theme.spacing(4),
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
}));

export default function SignIn() {
  const classes = useStyles();

  // eslint-disable-next-line
  const [type, setType] = React.useState<string>("");
  // eslint-disable-next-line
  const [mistry, setMistry] = React.useState<string>("");


  const accountForm = useForm<accountFormProps>({
    mode: "onChange",
    validationSchema: yup.object().shape({
      id: yup
        .string()
        .required("กรุณากรอกเลขประจำตัวประจำตัวประชาชน")
        .matches(/^[0-9]{13}$/, "กรุณากรอกเป็นตัวเลข 13 หลัก")
        .test(
          "ตรวจสอบรหัสบัตรประชาชน",
          "กรอกเลขประจำตัวประชาชนผิด กรุณากรอกใหม่",

          function (item: any) {
            var i, sum;
            for (i = 0, sum = 0; i < 12; i++)
              sum += parseFloat(item.charAt(i)) * (13 - i);
            if ((11 - (sum % 11)) % 10 !== parseFloat(item.charAt(12))) {
              return false;
            }
            return true;
          }
        ),
      password: yup
        .string()
        .required("กรุณากรอกรหัสผ่าน ( 1 )")
        .min(8, "รหัสต้องมีอย่างน้อย 8 ตัวอักษร"),
      comfirmpassword: yup
        .string()
        .oneOf([yup.ref("password")], "กรุณากรอกรหัสให้เหมือนกัน")
        .required("กรุณากรอกรหัสผ่าน ( 2 )"),
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
  //const [data, setData] = useState([])
  //const [open, setOpen] = useState(false)




  const onSubmitData = (data: any) => {
    const preinfo = info(data);
    //setData(preinfo)
    //setOpen(true)
    const action = actions.loadSignUp(preinfo);
    dispatch(action);
  };

  const { message, severity } = useSelector((state: any) => state.infomation);


  return (
    <>
      {message !== null && <Snackbar
        message={message
        }
        open={message !== null ? true : false}
        severity={severity}
      />
      }
      <form onSubmit={accountForm.handleSubmit(onSubmitData)}>

        <Container component="main" maxWidth="xs" className={classes.paper}>
          <Account formProps={accountForm} />
          <Information formProps={accountForm} />
          <TypeSelect formProps={accountForm} />
          <Container component="main" maxWidth="xs" className={classes.paper}>
            <Button type="submit" fullWidth className={classes.submit}>
              ส่งข้อมูล
            </Button>

          </Container>
        </Container>
      </form>
    </>
  );
}
