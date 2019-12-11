import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import {Container, Button, AppBar,Typography, IconButton} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Follow from '../components/Follow';



const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    header:{
        fontSize:"40px",
        lineHeight:"48px",
        fontWeight:"400px",
        marginBottom:"10px"
    },
    subTitle:{
        fontSize:"24px",
        lineHeight:"32px",
        fontWeight:"300px",
    },

    profileName:{
        fontSize:"14px",
        lineHeight:"16px",
    },
    avatar: {
        width: 50,
        height: 50,
      },

    follow:{
        fontSize:"10px",
        height:"20px",
        padding:0,
    },
    article:{
        fontSize:"21px",
        fontWeight:"400",
        lineHeight:"1.58"
    }
  }));


export default function CategoryPage() {
        const classes = useStyles();
    return( 
        <Container className={classes.root}>
            <Header/>
            <div style={{marginBottom:"10px"}}>
                <hr/>
                <AppBar position="static" elevation="0" style={{background:"white", alignItems:"left"}}>
                    <div style={{flex:1, flexDirection:"row", display:"flex"}}> 
                        <div style={{paddingRight:"10px"}}>
                            <img src={"https://miro.medium.com/max/216/1*IPEsgX_bZKP_7OubdnI7-Q.png"}alt="logo"/>
                        </div>
                        <div style={{flex:1, flexDirection:"row", display:"flex"}}>
                            <Button>MISSION ORIGINALS</Button>
                            <Typography style={{margin:"5px", color:"black",fontSize:"24px"}}>|</Typography>
                            <Button>SUBSCRIBE</Button>
                        </div>
                    </div>    
                </AppBar>
            </div>
            <div style={{alignItems :"center", flex:1, flexDirection:"column", display:"flex",marginBottom:"20px"}}>
                <Card elevation="0">
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Joy Of Being an Uthethered Woman"
                        image={"https://miro.medium.com/max/4195/1*cWrckQhDDGxKiwpb6YtPtg.jpeg"}
                        title="The Greatest Sales Deck I’ve Ever Seen"
                        />
                    </CardActionArea>
                </Card>
                <div>
                    <Typography variant="caption">Photo by Olu Eletu</Typography>
                </div>
            </div>
            <div style={{textAlign:"justify", flex:1, flexDirection:"column", display:"flex", padding:"0 250px 0 250px"}}>
                <div style={{marginBottom:"20px"}}>
                    <Typography className={classes.header}>
                        The Greatest Sales Deck I’ve Ever Seen
                    </Typography>
                    <Typography color="textSecondary" className={classes.subTitle}>
                        It’s Zuora’s, and it’s brilliant. Here’s why.
                    </Typography>
                </div>
                <div style={{flex:1, flexDirection:"row", display:"flex",marginBottom:"50px"}}>
                    <div style={{marginRight:"10px"}}>
                        <Avatar className={classes.avatar} alt="Avatar" src={"https://miro.medium.com/fit/c/128/128/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg"} />
                    </div>
                    <div style={{flex:1, flexDirection:"column", display:"flex"}}>
                        <div>
                            <Typography className={classes.profileName} variant="caption"style={{marginRight:"6px"}}>Andy Raskin</Typography>
                            <Button className={classes.follow} style={{border:"1px green solid", color:"green"}}>Follow</Button>
                        </div>
                        <div>
                            <Typography className={classes.profileName} color="textSecondary">
                                Sep 15, 2016 - 8 min read
                            </Typography>                     
                        </div>
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
                            <LinkedInIcon/>
                        </IconButton>
                        <IconButton
                            color="inherit"
                        >
                            <BookmarkIcon/>
                        </IconButton>
                        
                    </div>
                </div>
                <div className={classes.article} style={{marginBottom:"30px"}}>
                    <Typography className={classes.article}>
                        A few months ago, my friend Tim took a new sales job at a Series C tech company that had raised over $60 million from A-list investors. 
                        He’s one of the best salespeople I know, but soon after starting, he emailed me to say he was struggling.
                    <br/>
                    <br/>
                        “I’ve landed a few small accounts,” Tim said. “But my pitch falls flat at big enterprises.”
                    <br/>
                    <br/>
                        As I’ve written before, I love helping teams craft the high-level strategic story that powers sales, 
                        marketing, fundraising — everything. So Tim and I met for lunch at the Amber India restaurant off 
                        San Francisco’s Market Street to review his deck.
                    <br/>
                    <br/>
                        After loading up on the all-you-can-eat buffet, I asked Tim, “At what point do prospects tune out?”
                    <br/>
                    <br/>
                        “Usually a few slides in,” he said.
                    <br/>
                    <br/>
                        Intent on maximizing dining ROI, Tim went back to the buffet for seconds. When he returned, 
                        I pulled out my laptop and launched into a Powerpoint presentation.
                    <br/>
                    <br/>
                        “What’s this?” Tim asked.
                    <br/>
                    <br/>
                        “This,” I said, “is the greatest sales deck I have ever seen.”
                    </Typography>
                </div>
                
                    <Follow/>
                
            </div>
        </Container>
    );
}
