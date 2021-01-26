import React, { useState } from "react";
import { Grid, Box, Divider, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from '../../share/DialogCourse'
import { useSelector } from 'react-redux'




const useStyles = makeStyles((theme) => ({
    card: {
        marginTop: "10px",
        width: "95%",
        borderRadius: 16,
        [theme.breakpoints.only("xs")]: {
            width: "100%",
        },
    },
    header: {
        fontFamily: "Barlow, san-serif",
    },
    headline: {
        color: theme.palette.primary.main,
        fontSize: "1.25rem",
        fontWeight: 600,
    },
    link: {
        color: "#2281bb",
        padding: "0 0.25rem",
        fontSize: "0.875rem",
    },
    actions: {
        color: "#BDC9D7",
    },
    divider: {
        backgroundColor: "#d9e2ee",
        margin: "0 20px",
    },
    caption: {
        overflow: "hidden",
        display: "-webkit-box",
        textOverflow: "ellipsis",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        color: "#59626f",
        [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
        },
    },
    category: {
        color: " #59636f",
        [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
        },
    },
    name: {
        color: theme.palette.primary.main,
        overflow: "hidden",
        display: "-webkit-box",
        textOverflow: "ellipsis",
        WebkitBoxOrient: "vertical",
        [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
        },
    },
    items: {
        marginBottom: 4,
        transition: "transform 0.7s ease-in-out",
        "&:hover": {
            transform: "scale(1.05)",
        },
    },
    image: {
        borderRadius: 10,
        boxShadow: "0 4px 4px 0 #BDC9D7",
    }, cardMedia: {
        paddingTop: "75%", // 4:3
        borderRadius: theme.shape.borderRadius,
        boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
    dot: {
        height: "10px",
        width: "10px",
        backgroundColor: "#cfcde6",
        borderRadius: "50%",
        display: "inline-block",
        marginLeft: 10,
        marginRight: 4,
    },
}));

export default function SocialCard(props: any) {
    const { data } = props;
    const classes = useStyles();
    const [open, setOpen] = useState<boolean>(false)
    const { categories, colorCategory } = useSelector((state: any) => state.course);
    const onSelected = () => {
        setOpen(true)
    }
    return (
        <>


            <Grid

                container
                justify="flex-start"
                alignItems="center"
                spacing={2}
                className={classes.items}
                onClick={onSelected}
            >
                <Grid item xs={5}>
                    < CardMedia
                        style={{
                            background: `url('${data.thumbnail}')`,
                            backgroundSize: "cover",
                        }}
                        image={data.thumbnail}
                        className={classes.cardMedia}
                        title={data.name}

                    />
                </Grid>
                <Grid item xs={7}>
                    <Box fontSize={14} fontWeight={700} className={classes.name}>
                        {data.name}
                    </Box>
                    <Box fontSize={14} fontWeight={700} className={classes.name}>
                        {data.code}
                    </Box>
                    <Box
                        fontSize={12}
                        fontWeight={700}
                        className={classes.category}
                    >
                        <div className={classes.dot} style={{ background: colorCategory[data.courseCategoryId - 1] }} />{categories.length !== 0 && categories[data.courseCategoryId - 1].name}
                    </Box>
                    <Box fontSize={12} fontWeight={400} className={classes.caption}>
                        {data.learningObjective}
                    </Box>
                    <Divider />
                </Grid>
            </Grid>




            <Dialog open={open} setOpen={setOpen} data={data} isCurriculum={false} />

        </>
    );
};
