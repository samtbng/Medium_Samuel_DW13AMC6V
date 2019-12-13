import React from 'react';
import {Typography, Container} from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
const useStyles = makeStyles(theme => ({
    root:{
        flexGrow:1,
        background:"rgba(0, 0, 0, 0.9)",
        color:"white",
        padding:"50px 0px 50px 0px"
    },
    divColumn:{
        flex:1,
        flexDirection:"column",
        display:"flex",
    },
    divRow:{
        flex:1,
        flexDirection:"row",
        display:"flex",
    },
    title:{
        fontSize:"18px",
        lineHeight:"21px",
        fontWeight:"600",
        marginBottom:"15px"
    },
    context:{
        fontSize:"13px",
        lineHeight:"24px",
        fontWeight:"300",
    },
    mediumBottom:{
        fontSize:"30px",
        lineHeight:"34px",
        fontWeight:"600"
    },
    linkStyle:{
        marginLeft:"20px",
    }
}));

const content = [
    {
        id:1,
        titleText:"Discover Medium",
        contextText:"Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch",
    },
    {
        id:2,
        titleText:"Make Medium Yours",
        contextText:"Follow all the topics you care about, and we’ll deliver the best stories for you to your homepage and inbox. Explore",
    },
    {
        id:3,
        titleText:"Become a Member",
        contextText:"Get unlimited access to the best stories on Medium — and support writers while you’re at it. Just $5/month. Upgrade",
    },
]


export default function Footer(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Container style={{padding:"15px"}}>
                <div className={classes.divRow}>
                        {content.map(items =>
                        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", margin:"0px 5px 0px 5px"}}>
                            <Typography className={classes.title}>
                                {items.titleText}
                            </Typography>
                            <Typography className={classes.context}>
                                {items.contextText}
                            </Typography>
                        </div>
                    )}
                </div>
                <div style={{margin:"40px 0px 40px 0px"}}><hr style={{color:"white"}}/></div>
                <div className={classes.divRow}>
                    <div>
                        <Typography className={classes.mediumBottom}>Medium</Typography>
                    </div>
                    <div style={{display:"flex",flex:1,justifyContent:"flex-end"}}>
                        <Link className={classes.linkStyle} to="#">About</Link>
                        <Link className={classes.linkStyle} to="#">Help</Link>
                        <Link className={classes.linkStyle} to="#">Legal</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}