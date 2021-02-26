import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import course from "modules/course/reducer";
import login from "modules/login/reducer";
import infomation from "modules/infomation/reducer";
import singup from "modules/signup/reducer";
import relation from "modules/relation/reducer";
import forgot from "modules/forgetPassword/reducer";
import reset from "modules/reset/reducer";
import edit from "modules/editProfile/reducer";
import certificate from "modules/history/reducer";
import pressReleases from "modules/relation/reducer";
import admin from "modules/admin/reducer";
export default (history: any) =>
  combineReducers({
    router: connectRouter(history),

    course,
    login,
    infomation,
    singup,
    relation,
    forgot,
    reset,
    edit,
    certificate,
    pressReleases,
    admin,
  });
