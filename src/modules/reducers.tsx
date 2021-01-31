import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import course from "modules/coursePortal/reducer";
import login from "modules/loginPortal/reducer";
import infomation from "modules/infomation/reducer";
import singup from "modules/signupPortal/reducer";
import relation from "modules/relationPortal/reducer";
import forgot from "modules/forgetPassword/reducer";
import reset from "modules/resetPortal/reducer";
import edit from "modules/editProfile/reducer";
import certificate from "modules/historyPortal/reducer";
import pressReleases from "modules/relationPortal/reducer";
import admin from "modules/adminPortal/reducer";
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
