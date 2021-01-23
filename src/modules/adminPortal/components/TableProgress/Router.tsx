import React from "react";
import Course from "./Course/index"
import Curriculum from "./Curriculum/index"
import { Route, Switch, useRouteMatch } from "react-router-dom";


export default function Routes() {
    const { path } = useRouteMatch()

    return (
        <>

            <Switch>
                <Route exact path={`${path}/curriculum`}>
                    <Curriculum />
                </Route>
                <Route exact path={`${path}`}>
                    <Course />
                </Route>




            </Switch>
        </>
    );
}
