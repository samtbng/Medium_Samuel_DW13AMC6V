import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Header from '../components/Header';
import {Container, Typography, Paper, Avatar, Button} from '@material-ui/core';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const komentar = [
    {
        id:1,
        avatar:"https://miro.medium.com/fit/c/256/256/0*PAA0hv8HFxvrDMlc.jpeg",
        name:"Dave Goldberg",
        date:"Oct 22, 2016",
        comment:"This post is fantastic. I’ve now used this framework 3–4 times in the context of convincing internal stakeholders to support new product initiatives and strategies. I find it focuses my thinking around the most important factors that lead to decisions and actions (which is of course, the point).",
        likes:"170",
        responses:"25 responses",
    },
    {
        id:2,
        avatar:"https://miro.medium.com/fit/c/256/256/1*mRR9CcvYt6uBKSx3xj1JHQ.png",
        name:"Lauren Schulte Wang",
        date:"Aug 18, 2017",
        comment:"This is the brilliant work of a mentor of mine, Judy Loehr. She’s been instrumental in my career. Please consider giving her a shout-out for coming up with this narrative and the “subscription economy” storyline.",
        likes:"329",
        responses:"120 responses",
    },
    {
        id:3,
        avatar:"https://miro.medium.com/fit/c/256/256/0*C4koO4fF2eE_gv__.jpg",
        name:"Scott Nelson",
        date:"Dec 8, 2017",
        comment:"Andy, got to give you (and Judy Loehr) some love here. We recently revamped our sales deck and used this one as inspiration & a new framework. I tested it for the first time last month and by the time I was on my last slide I had the entire room shaking their heads in agreement with me! Truly amazing…",
        likes:"215",
        responses:"55 responses",
    },
    {
        id:4,
        avatar:"https://miro.medium.com/fit/c/256/256/1*GKoWWzXAoYkV5_qkG0OFMQ@2x.jpeg",
        name:"Mike Casey Voiceover",
        date:"Sep 15, 2018",
        comment:"I’ve been delivering persuasion pitches since the first Bush was in office. And this is the most shocking idea I’ve seen on the topic. Thank you for its clarity, simplicity and elegance. I could only clap 50x. Otherwise, I’d still be clapping.",
        likes:"20",
        responses:"2 responses",
    },
    {
        id:5,
        avatar:"https://miro.medium.com/fit/c/256/256/0*C6AOZBxehDpGDJ_U",
        name:"Mariana Nieto",
        date:"Feb 20",
        comment:"I am so thankful I found this! I am at no level a sales person, but I run my own business and need as much help as I can get when it comes to speaking about it to prospective clients. This will help me so much when presenting at my networking chapter, and even putting together a webinar to capture leads! Thank you so much!",
        likes:"87",
        responses:"22 responses",
    },
]
const useStyles = makeStyles(theme => ({
    topic:{
        fontSize:"14px",
        lineHeight:"18px",
    },
    indicator:{
        fontSize:"12px",
        lineHeight:"14px",
        fontWeight:"bold"
    },
    head:{
        fontSize:"14px",
        lineHeight:"18px",
        marginBottom:"10px",
        fontWeight:"bold",
    },
    iconSmall:{
        width:"20px",
        height:"20px",
        margin:"0 10px 0 10px"
    },
    clap: {
        width: 40,
        height: 40,
      },
    profileComment:{
        fontSize:"12px",
        lineHeight:"14px",
    },
    Button:{
        fontSize:"12px",
        lineHeight:"14px",
    },
}));
export default function Comment(){
    const classes = useStyles();
    return(
        <Container>
            <Header/>
            <div style={{background:"white", padding:"80px 300px 80px 300px",flex:1, flexDirection:"column", display:"flex"}}>
                <Typography className={classes.head}>
                        Showing Responses for:
                </Typography>
                <Paper style={{border:"1px black solid", flex:1, flexDirection:"column", display:"flex", padding:"20px"}}>
                    <div style={{flex:1, flexDirection:"row", display:"flex"}}>
                        <div>
                            <Typography className={classes.topic}>
                                The Greatest Sales Deck I’ve Ever Seen
                            </Typography>
                        </div>
                        <div style={{justifyContent:"flex-end", flex:1, flexDirection:"row", display:"flex",}}>
                            <Avatar className={classes.iconSmall} alt="Claps" src={"https://static.thenounproject.com/png/1085294-200.png"}/>
                            <Typography style={{margin:"5px"}} className={classes.indicator}>88K</Typography>
                            <ModeCommentIcon className={classes.iconSmall}/>
                            <Typography style={{margin:"5px"}} className={classes.indicator}>342</Typography>
                        </div>
                    </div>
                    <div>
                        <Typography color="textSecondary" className={classes.topic}>
                            Andy Raskin 
                        </Typography>
                    </div>
                </Paper>
            </div>
            <div style={{background:"rgba(0,0,0,0.05)", padding:"10px 300px 0 300px",flex:1, flexDirection:"column", display:"flex"}}>
                <Typography className={classes.head}>
                    Responses
                </Typography>
                <div style={{flex:1, flexDirection:"column", display:"flex"}}>
                    <Paper style={{padding:"10px", marginBottom:"20px"}}>
                            <div style={{flex:1, flexDirection:"row", display:"flex",}}>
                                <Avatar style={{marginRight:"10px"}} className={classes.clap} alt="Samuel Tobing" src={"https://miro.medium.com/fit/c/256/256/1*5HuPOJPsdTfmCoYOYwtCpw.jpeg"} />
                                <div style={{display:'flex', flexDirection: "column",justifyContent: "center",}}>
                                    <Typography style={{marginBottom:"10px"}} className={classes.profileComment}>Samuel Tobing</Typography> 
                                </div>
                            </div>
                            <div style={{padding:"20px 0 20px 0", flex:1, flexDirection:"column",display:"flex"}}>
                                <textarea rows="10" style={{flex:1, flexDirection:"column",display:"flex"}} placeholder="Write Respone..." ></textarea>
                            </div>
                            <div style={{flex:1, flexDirection:"row", display:"flex"}}>
                                <Button className={classes.Button} style={{border:"1px green solid", color:"green",marginRight:"10px"}}>Publish</Button>
                                <Button className={classes.Button} style={{color:"rgba(0,0,0,0.54)"}} variant="outlined">Full Screen</Button>
                            </div>
                    </Paper>
                    {komentar.map(items =>
                        <Paper style={{padding:"10px", marginBottom:"20px"}}>
                            <div style={{flex:1, flexDirection:"row", display:"flex",}}>
                                <Avatar style={{marginRight:"10px"}} className={classes.clap} alt={items.name} src={items.avatar} />
                                <div  style={{flex:1, flexDirection:"column", display:"flex"}}>
                                    <Typography style={{marginBottom:"10px"}} className={classes.profileComment}>{items.name}</Typography>
                                    <Typography color="textSecondary" className={classes.profileComment}>{items.date}</Typography>     
                                </div>
                            </div>
                            <div style={{padding:"20px 0 20px 0"}}>
                                <Typography>
                                    {items.comment}
                                </Typography>
                            </div>
                            <div style={{flex:1, flexDirection:"row", display:"flex"}}>
                                <div style={{flex:1, flexDirection:"row", display:"flex"}}>
                                <Avatar className={classes.iconSmall} alt="Claps" src={"https://static.thenounproject.com/png/1085294-200.png"}/>
                                <Typography color="textSecondary" style={{margin:"5px"}} className={classes.indicator}>{items.likes}</Typography>
                                </div>
                                <div style={{justifyContent:"flex-end", flex:1, flexDirection:"row", display:"flex"}}>
                                    <Typography color="textSecondary" style={{margin:"5px"}} className={classes.indicator}>
                                        {items.responses}
                                    </Typography>
                                    <BookmarkIcon className={classes.smallIcon}/>
                                    <ExpandMoreIcon className={classes.smallIcon}/>
                                </div>
                            </div>
                        </Paper>
                     )}
                </div>
            </div>
        </Container>
    );
}