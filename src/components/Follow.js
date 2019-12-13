import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Button, Avatar, IconButton, Divider,Typography} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const listProfile = [
    {
        id:1,
        author:"WRITTEN BY",
        avatar:"https://miro.medium.com/fit/c/128/128/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg",
        name:"Andy Raskin",
        bio:"Helping leaders tell strategic stories. Ex @skype @mashery @timeinc http://andyraskin.com",
    },
    {
        id:2,
        avatar:"https://miro.medium.com/fit/c/80/80/1*kFWwYehzjJIhgw8hTygfHw.png",
        name:"Mission.org",
        bio:"A network of business & tech podcasts designed to accelerate learning. Selected as “Best of 2018” by Apple. Mission.org",
    }
]
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    clap: {
        width: 50,
        height: 50,
        border:"1px green solid",
        padding:"3px",
      },
    avatar:{
        width:80,
        height:80,
    },
    author:{
        lineHeight:"18px",
        fontSize:"15px",
        fontWeight:"300",
    },
    name:{
        lineHeight:"31px",
        fontSize:"23px",
        fontWeight:"600",
        marginBottom:"10px",
    },
    bio:{
        lineHeight:"18px",
        fontSize:"15px",
        fontWeight:"300",
    }
  }));
const related = [
    {
    id:1,
    name:"Statup"
},
{
    id:2,
    name:"Entrepreneur"
},
{
    id:3,
    name:"Sales"
},
{
    id:4,
    name:"Marketing"
},
{
    id:5,
    name:"Pitching"
},
]

export default function CategoryPage() {
    const classes = useStyles();
return(
    <Container className={classes.root}>
        <div style={{flex:1, flexDirection:"column", display:"flex"}}>
            <div style={{flex:1, flexDirection:"row", display:"flex", margin:"10px 0 10px 0"}}>
                {related.map(item =>
                    <Button style={{marginRight:"5px", background:"rgba(0, 0, 0, 0.05)",color:"rgba(0, 0, 0, 0.54)", fontSize:"10px", fontWeight:"200"}}>{item.name}</Button>
                    )}
            </div>
            <div style={{flex:1, flexDirection:"row", display:"flex"}}>
                <div style={{marginRight:"10px"}}>
                <Avatar className={classes.clap} alt="Claps" src={"https://static.thenounproject.com/png/1085294-200.png"} />
                </div>
                <div style={{flex:1, flexDirection:"row", display:"flex"}}>
                    <Button style={{height:"40px"}}>
                        88K Claps
                    </Button>
                </div>
                <div>
                        <IconButton
                            color="inherit"
                        >
                            <TwitterIcon/>
                        </IconButton>
                        <IconButton
                            color="inherit"
                        >
                            <FacebookIcon/>
                        </IconButton>
                        <IconButton
                            color="inherit"
                        >
                            <BookmarkIcon/>
                        </IconButton>
                        <IconButton
                            color="inherit"
                        >
                            <MoreHorizIcon/>
                        </IconButton>
                    </div>
                </div>
                <Divider style={{margin:"20px 0 20px 0"}} />
                <div>
                    {listProfile.map(items =>
                        <div style={{flex:1, flexDirection:"row", display:"flex",marginBottom:"40px"}}>
                            <div style={{marginRight:"20px"}}>
                                <Avatar className={classes.avatar} alt={items.name} src={items.avatar} />
                            </div>
                            <div style={{flex:1, flexDirection:"column", display:"flex", paddingRight:"30px"}}>
                                <Typography  color="textSecondary" className={classes.author}>{items.author}</Typography>
                                <Typography className={classes.name}>{items.name}</Typography>
                                <Typography  color="textSecondary" className={classes.bio}>{items.bio}</Typography>
                            </div>
                            <div style={{display:'flex', flexDirection: "column", justifyContent: "center"}}>
                                <Button style={{color:"green", border:"1px green solid", fontSize:"10px", fontWeight:"200"}}>Follow</Button>
                            </div>
                        </div>
                    )}
                </div>
                <Divider style={{margin:"20px 0 20px 0"}} />
                    <div style={{flex:1, flexDirection:"column", display:"flex",}}>
                            <Button href="/comment" style={{height:"40px",color:"green",border:"1px green solid", fontSize:"10px", fontWeight:"200"}}>
                                See Responses (234)
                            </Button>
                    </div>
            </div>
    </Container>
);
}