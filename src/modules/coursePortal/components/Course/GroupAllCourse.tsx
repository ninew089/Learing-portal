import React, { useEffect, Suspense, lazy } from "react";
import { Grid, Divider, Container, } from "@material-ui/core";


import { makeStyles } from "@material-ui/core/styles";


import { useDispatch, useSelector } from 'react-redux'
import * as actions from "../../actions"

const CourseDetail = lazy(() => import('./CourseDetails'));
const Header = lazy(() => import('../../share/Header'));
const SelectCategory = lazy(() => import('../../share/SelectCategory'));


const useStyles = makeStyles((theme) => ({
    content: {
        paddingRight: "8vw",
        paddingLeft: "8vw",
    },
    divider: {
        marginBottom: 20
    },

}));
export default function GroupCourse(props: any) {
    const dispatch = useDispatch();
    const { courses, isLoadingCourses } = useSelector((state: any) => state.course);
    const classes = useStyles()

    useEffect(() => {
        const action = actions.loadCourses("all")
        dispatch(action)
        // eslint-disable-next-line
    }, [])


    const renderLoader = () =>
        <div></div>

    return (
        <Suspense fallback={renderLoader()}>
            <Header text={"รายวิชา"} />


            <div>

                <Grid container className={classes.content} direction="row" alignItems="center" justify={"space-between"} >

                    <h2>คอร์สเรียนทั้งหมด</h2>
                    <SelectCategory />

                </Grid>
                <Divider className={classes.divider} />

                <Container maxWidth="lg">
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justify={isLoadingCourses ? "center" : "flex-start"}
                        spacing={3}
                    >

                        {courses.map((item: any, index: number) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                                <CourseDetail
                                    key={index}
                                    id={item.id}
                                    learningTopic={item.learningTopic}
                                    learningObjective={item.learningObjective}
                                    courseCategoryId={item.courseCategoryId}
                                    thumbnail={item.thumbnail}
                                    viewCount={item.viewCount}
                                    assessment={item.assessment}
                                    targetGroup={item.targetGroup}
                                    point={(item.satisfactionSum) / item.satisfactionCount}
                                    satisfactionCount={item.satisfactionCount}
                                    link={item.link}
                                    code={item.code}
                                    name={item.name}
                                    platformId={item.platformId}
                                />
                            </Grid>
                        ))
                        }
                    </Grid>
                </Container>
            </div>

        </Suspense>
    );
}
