import React, { useEffect, Suspense, lazy, useState } from "react";
import { Grid, Divider, Container, CircularProgress, Button } from "@material-ui/core";


import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from "../../actions"
import { CardProps } from "./tyscript"
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
    }, circular: {
        marginTop: 20
    }, button: {
        background: theme.palette.primary.main,
        borderRadius: 40,
        padding: '15px 30px 15px 30px',
        margin: 10
    }

}));



export default function GroupCourse() {
    const dispatch = useDispatch();
    const { courses, isLoadingCourses } = useSelector((state: any) => state.course);
    const classes = useStyles()
    const postsPerPage = 8;
    const [postsToShow, setPostsToShow] = useState<CardProps[]>([]);
    const [next, setNext] = useState(8);
    const loopWithSlice = (start: any, end: any) => {
        const slicedPosts = courses.slice(start, end);
        setPostsToShow([...postsToShow, ...slicedPosts]);
    };

    useEffect(() => {
        loopWithSlice(0, postsPerPage);
        // eslint-disable-next-line
    }, [isLoadingCourses]);

    const handleShowMorePosts = () => {
        loopWithSlice(next, next + postsPerPage);
        setNext(next + postsPerPage);
    };
    useEffect(() => {



        const action = actions.loadCourses("all")
        dispatch(action)
        setPostsToShow([])
        // eslint-disable-next-line
    }, [])


    const renderLoader = () =>
        <div></div>

    return (
        <Suspense fallback={renderLoader()}>
            <Header text={"รายวิชา"} />


            <div>

                <Grid container className={classes.content} direction="row" alignItems="center" justify={"space-between"} >

                    <h2>รายวิชาทั้งหมด</h2>
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
                        {isLoadingCourses && <CircularProgress color="secondary" className={classes.circular} />}

                        {postsToShow.map((item: any, index: number) => (

                            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index} >

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

                    {!isLoadingCourses && next < courses.length &&
                        <Grid
                            container
                            direction="row"
                            alignItems="center"
                            justify={"center"}
                            spacing={3}
                        >

                            <Button onClick={handleShowMorePosts} color="secondary" className={classes.button}>ดูเพิ่มเติม</Button>
                        </Grid>}
                </Container>
            </div>

        </Suspense>
    );
}
