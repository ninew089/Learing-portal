import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useSelector } from "react-redux";
export default function ResponsiveDialog({
  open,
  setOpen,
  data,
}: {
  open: boolean;
  setOpen: any;
  data: any;
}) {
  const { educations } = useSelector((state: any) => state.infomation);

  const showEducation = educations.filter(
    (education: any) => education.id === data.educationid
  );

  const handleClose = () => {
    setOpen(false);
  };
  /*
     "id": "${id}",
          "usertypeid": ${parseInt(signUpInfo.usertypeid)},
          "title": "${signUpInfo.title}",
          "firstname": "${signUpInfo.name}",
          "lastname": "${signUpInfo.lastname}",
          "gender": "${signUpInfo.gender}",
          "educationid": ${parseInt(signUpInfo.educationid)},
          "birthyear": "${signUpInfo.birthyear}",
          "email": "${signUpInfo.email}",
          "password": "${signUpInfo.password}",
          "user1":{
          "id":"${id}",
          "jobtypeid": ${parseInt(signUpInfo.jobtypeId)},
          "jobtitle": "${signUpInfo.jobTitle}",
          "joblevelid":${parseInt(signUpInfo.jobLevelid)},
          "ministryid" :${parseInt(signUpInfo.MinistryId)},
          "departmentid": ${parseInt(signUpInfo.DepartmentId)},
          "division": "${signUpInfo.Division}",
          "jobstartdate": "${formatDate(signUpInfo.jobStartDate)}"
    */
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"ข้อมูลการสมัคร"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText color="primary">
            ชื่อ: {data.title}
            {data.firstname} นามสกุล: {data.lastname}
          </DialogContentText>
          <DialogContentText color="primary">
            เลขที่บัตรประชาชน:{data.id}
          </DialogContentText>
          <DialogContentText color="primary">
            ปีเกิด:{data.birthyear}
          </DialogContentText>
          <DialogContentText color="primary">
            เพศ: {data.gender}
          </DialogContentText>
          <DialogContentText color="primary">
            ระดับการศึกษา:{showEducation[0]?.name}
          </DialogContentText>
          <DialogContentText color="primary">
            อีเมล:{data.email}
          </DialogContentText>

          <DialogContentText color="error">
            โปรดตรวจสอบข้อมูลให้ถูกต้อง
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            แก้ไขข้อมูล
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
