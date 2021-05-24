import { formatDate } from "./dateFormat";
import { getCookie } from "cookie/cookie";
import { parseJwt } from "./getDataJWT";
export function info(signUpInfo) {
  if (signUpInfo.usertypeid === "1") {
    const data = JSON.parse(`{
        "id": "${signUpInfo.id}",
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
        "id":"${signUpInfo.id}",
        "jobtypeid": ${parseInt(signUpInfo.jobtypeId)},
        "jobtitle": "${signUpInfo.jobTitle}",
        "joblevelid":${parseInt(signUpInfo.jobLevelid)},
        "ministryid" :${parseInt(signUpInfo.MinistryId)},
        "departmentid": ${parseInt(signUpInfo.DepartmentId)},
        "division": "${signUpInfo.Division}",
        "jobstartdate": "${formatDate(signUpInfo.jobStartDate)}"
      }
    }`);
    return data;
  }
  if (signUpInfo.usertypeid === "2") {
    const data = JSON.parse(`{
        "id": "${signUpInfo.id}",
        "usertypeid": ${parseInt(signUpInfo.usertypeid)},
        "title": "${signUpInfo.title}",
        "firstname": "${signUpInfo.name}",
        "lastname": "${signUpInfo.lastname}",
        "gender": "${signUpInfo.gender}",
        "educationid": ${parseInt(signUpInfo.educationid)},
        "birthyear": "${signUpInfo.birthyear}",
        "email": "${signUpInfo.email}",
        "password": "${signUpInfo.password}",
        "user2": {
          "id":"${signUpInfo.id}",
          "jobtypeid": ${parseInt(signUpInfo.jobtypeId)},
          "jobtitle": "${signUpInfo.jobTitle}",
          "joblevel":"${signUpInfo.jobLevel}",
          "ministryid" :${parseInt(signUpInfo.MinistryId)},
          "departmentid": ${parseInt(signUpInfo.DepartmentId)},
          "division": "${signUpInfo.Division}",
          "jobstartdate": "${formatDate(signUpInfo.jobStartDate)}"
        }
      }`);
    return data;
  }
  if (signUpInfo.usertypeid === "3") {
    const data = JSON.parse(`{
        "id": "${signUpInfo.id}",
        "usertypeid": ${parseInt(signUpInfo.usertypeid)},
        "title": "${signUpInfo.title}",
        "firstname": "${signUpInfo.name}",
        "lastname": "${signUpInfo.lastname}",
        "gender": "${signUpInfo.gender}",
        "educationid": ${parseInt(signUpInfo.educationid)},
        "birthyear": "${signUpInfo.birthyear}",
        "email": "${signUpInfo.email}",
        "password": "${signUpInfo.password}",
         "user3": {
            "id":"${signUpInfo.id}",
            "jobtypeid": ${parseInt(signUpInfo.jobtypeId)},
            "jobtitle":"${signUpInfo.jobTitle}",
            "joblevel":"${signUpInfo.jobLevel}",
            "ministryid" :${parseInt(signUpInfo.MinistryId)},
            "departmentid":${parseInt(signUpInfo.DepartmentId)},
            "division": "${signUpInfo.Division}",
            "jobstartdate": "${formatDate(signUpInfo.jobStartDate)}"}}`);
    return data;
  }

  if (signUpInfo.usertypeid === "4") {
    const data = JSON.parse(`{
        "id": "${signUpInfo.id}",
        "usertypeid": ${parseInt(signUpInfo.usertypeid)},
        "title": "${signUpInfo.title}",
        "firstname": "${signUpInfo.name}",
        "lastname": "${signUpInfo.lastname}",
        "gender": "${signUpInfo.gender}",
        "educationid": ${parseInt(signUpInfo.educationid)},
        "birthyear": "${signUpInfo.birthyear}",
        "email": "${signUpInfo.email}",
        "password": "${signUpInfo.password}",
          "user4": {
              "id":"${signUpInfo.id}",
              "stateenterpriseid":${parseInt(signUpInfo.stateEnterprisid)},
              "jobtitle": "${signUpInfo.jobTitle}",
              "jobstartdate": "${formatDate(signUpInfo.jobStartDate)}"
          }
        }`);
    return data;
  }
  if (signUpInfo.usertypeid === "5") {
    const data = JSON.parse(`{
        "id": "${signUpInfo.id}",
        "usertypeid": ${parseInt(signUpInfo.usertypeid)},
        "title": "${signUpInfo.title}",
        "firstname": "${signUpInfo.name}",
        "lastname": "${signUpInfo.lastname}",
        "gender": "${signUpInfo.gender}",
        "educationid": ${parseInt(signUpInfo.educationid)},
        "birthyear": "${signUpInfo.birthyear}",
        "email": "${signUpInfo.email}",
        "password": "${signUpInfo.password}",
          "user5": {
              "id":"${signUpInfo.id}",
             "occupationid": ${parseInt(signUpInfo.OccupationId)},
              "jobtitle": "${signUpInfo.jobTitle}",
              "workplace": "${signUpInfo.workPlace}"
          }
        }`);

    return data;
  }
  return "";
}

export function infoEdit(signUpInfo) {
  const token = getCookie("token");
  const id = parseJwt(token).unique_name;
  if (signUpInfo.usertypeid === "1") {
    const data = JSON.parse(`{
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
    }
  }`);
    return data;
  }
  if (signUpInfo.usertypeid === "2") {
    const data = JSON.parse(`{
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
      "user2": {
        "id":"${id}",
        "jobtypeid": ${parseInt(signUpInfo.jobtypeId)},
        "jobtitle": "${signUpInfo.jobTitle}",
        "joblevel":"${signUpInfo.jobLevel}",
        "ministryid" :${parseInt(signUpInfo.MinistryId)},
        "departmentid": ${parseInt(signUpInfo.DepartmentId)},
        "division": "${signUpInfo.Division}",
        "jobstartdate": "${formatDate(signUpInfo.jobStartDate)}"
      }
    }`);
    return data;
  }
  if (signUpInfo.usertypeid === "3") {
    const data = JSON.parse(`{
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
       "user3": {
          "id":"${id}",
          "jobtypeid": ${parseInt(signUpInfo.jobtypeId)},
          "jobtitle":"${signUpInfo.jobTitle}",
          "joblevel":"${signUpInfo.jobLevel}",
          "ministryid" :${parseInt(signUpInfo.MinistryId)},
          "departmentid":${parseInt(signUpInfo.DepartmentId)},
          "division": "${signUpInfo.Division}",
          "jobstartdate": "${formatDate(signUpInfo.jobStartDate)}"}}`);
    return data;
  }

  if (signUpInfo.usertypeid === "4") {
    const data = JSON.parse(`{
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
        "user4": {
            "id":"${id}",
            "stateenterpriseid":${parseInt(signUpInfo.stateEnterprisid)},
            "jobtitle": "${signUpInfo.jobTitle}",
            "jobstartdate": "${formatDate(signUpInfo.jobStartDate)}"
        }
      }`);
    return data;
  }
  if (signUpInfo.usertypeid === "5") {
    const data = JSON.parse(`{
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
        "user5": {
            "id":"${id}",
           "occupationid": ${parseInt(signUpInfo.OccupationId)},
            "jobtitle": "${signUpInfo.jobTitle}",
            "workplace": "${signUpInfo.workPlace}"
        }
      }`);

    return data;
  }
  return "";
}

export function infoEditver2(signUpInfo) {
  const token = getCookie("token");
  const id = parseJwt(token).unique_name;
  if (signUpInfo.usertypeid === "1") {
    const data = JSON.parse(`{

        "usertypeid": ${parseInt(signUpInfo.usertypeid)},
        "title": "${signUpInfo.title}",
        "firstname": "${signUpInfo.name}",
        "lastname": "${signUpInfo.lastname}",
        "gender": "${signUpInfo.gender}",
        "educationid": ${parseInt(signUpInfo.educationid)},
        "birthyear": "${signUpInfo.birthyear}",
        "email": "${signUpInfo.email}",
     
        "user1":{
        
        "jobtypeid": ${parseInt(signUpInfo.jobtypeId)},
        "jobtitle": "${signUpInfo.jobTitle}",
        "joblevelid":${parseInt(signUpInfo.jobLevelid)},
        "ministryid" :${parseInt(signUpInfo.MinistryId)},
        "departmentid": ${parseInt(signUpInfo.DepartmentId)},
        "division": "${signUpInfo.Division}",
        "jobstartdate": "${formatDate(signUpInfo.jobStartDate)}"
      }
    }`);
    return data;
  }
  if (signUpInfo.usertypeid === "2") {
    const data = JSON.parse(`{

        "usertypeid": ${parseInt(signUpInfo.usertypeid)},
        "title": "${signUpInfo.title}",
        "firstname": "${signUpInfo.name}",
        "lastname": "${signUpInfo.lastname}",
        "gender": "${signUpInfo.gender}",
        "educationid": ${parseInt(signUpInfo.educationid)},
        "birthyear": "${signUpInfo.birthyear}",
        "email": "${signUpInfo.email}",
  
        "user2": {
          
          "jobtypeid": ${parseInt(signUpInfo.jobtypeId)},
          "jobtitle": "${signUpInfo.jobTitle}",
          "joblevel":"${signUpInfo.jobLevel}",
          "ministryid" :${parseInt(signUpInfo.MinistryId)},
          "departmentid": ${parseInt(signUpInfo.DepartmentId)},
          "division": "${signUpInfo.Division}",
          "jobstartdate": "${formatDate(signUpInfo.jobStartDate)}"
        }
      }`);
    return data;
  }
  if (signUpInfo.usertypeid === "3") {
    const data = JSON.parse(`{

        "usertypeid": ${parseInt(signUpInfo.usertypeid)},
        "title": "${signUpInfo.title}",
        "firstname": "${signUpInfo.name}",
        "lastname": "${signUpInfo.lastname}",
        "gender": "${signUpInfo.gender}",
        "educationid": ${parseInt(signUpInfo.educationid)},
        "birthyear": "${signUpInfo.birthyear}",
        "email": "${signUpInfo.email}",
        
         "user3": {
            
            "jobtypeid": ${parseInt(signUpInfo.jobtypeId)},
            "jobtitle":"${signUpInfo.jobTitle}",
            "joblevel":"${signUpInfo.jobLevel}",
            "ministryid" :${parseInt(signUpInfo.MinistryId)},
            "departmentid":${parseInt(signUpInfo.DepartmentId)},
            "division": "${signUpInfo.Division}",
            "jobstartdate": "${formatDate(signUpInfo.jobStartDate)}"}}`);
    return data;
  }

  if (signUpInfo.usertypeid === "4") {
    const data = JSON.parse(`{
     
        "usertypeid": ${parseInt(signUpInfo.usertypeid)},
        "title": "${signUpInfo.title}",
        "firstname": "${signUpInfo.name}",
        "lastname": "${signUpInfo.lastname}",
        "gender": "${signUpInfo.gender}",
        "educationid": ${parseInt(signUpInfo.educationid)},
        "birthyear": "${signUpInfo.birthyear}",
        "email": "${signUpInfo.email}",
        "password": "${signUpInfo.password}",
          "user4": {
              
              "stateenterpriseid":${parseInt(signUpInfo.stateEnterprisid)},
              "jobtitle": "${signUpInfo.jobTitle}",
              "jobstartdate": "${formatDate(signUpInfo.jobStartDate)}"
          }
        }`);
    return data;
  }
  if (signUpInfo.usertypeid === "5") {
    const data = JSON.parse(`{
 
        "usertypeid": ${parseInt(signUpInfo.usertypeid)},
        "title": "${signUpInfo.title}",
        "firstname": "${signUpInfo.name}",
        "lastname": "${signUpInfo.lastname}",
        "gender": "${signUpInfo.gender}",
        "educationid": ${parseInt(signUpInfo.educationid)},
        "birthyear": "${signUpInfo.birthyear}",
        "email": "${signUpInfo.email}",

          "user5": {
              
             "occupationid": ${parseInt(signUpInfo.OccupationId)},
              "jobtitle": "${signUpInfo.jobTitle}",
              "workplace": "${signUpInfo.workPlace}"
          }
        }`);

    return data;
  }
  return "";
}
