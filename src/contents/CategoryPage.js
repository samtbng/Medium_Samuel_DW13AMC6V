import React from 'react';
import Header from '../components/Header';
import {Container, Grid, Typography, Button, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles(theme=> ({
    root:{
        flexGrow:1
    },
    header:{
        lineHeight:"18px",
        fontSize:"14px",
        alignContent:"justify",
        padding:"10px",
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
      },
    paper:{
        display:'flex',
        flexDirection: "column",
        justifyContent: "center",
        padding:"20px"
        
    },
    title:{ maxHeight:"90px",
            lineHeight:"30px",
            fontSize:"26px",
            marginBottom:"10px"
    },
    headline:{
            color:"textSecondary",
            lineHeight:"20px",
            fontSize:"16px",
            marginBottom:"30px"
    },
    author:{
        lineHeight:"16px",
        fontSize:"14px"
    },
    infoDate:{
        color:"textSecondary",
    }
  }));

export default function CategoryPage() {
    const classes = useStyles();
    return(
        <Container className={classes.root}>
            <Header/>
            <div>
                <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                maxWidth="md"
                minWidth="md"
                spacing={6}
                >
                    <Grid container style={{margin:"30px 0 30px 0"}}>
                        <Grid item xs={2}>
                            <img src="./oneZero.png" alt="One Zero Logo" width="220px"/>
                        </Grid>
                        <Grid item xs={5} style={{marginLeft:"30px"}}>
                            <Paper elevation="0">
                                <Typography className={classes.header}>
                                    <Link href="#" color="#6A0BFF">The front lines of the future.</Link> A Medium publication about
                                    <br/>tech and science.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="outlined" style={{position:"absolute", right:"100px", color:"primary"}}>
                                Follow
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Container style={{marginBottom:"20px"}}>
                            <Grid container spacing={0} >
                                <Grid item xs={7}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                            component="img"
                                            alt="Architects Are Playing With the Future of Design in Video Games"
                                            image="./categ1.png"
                                            height="300"
                                            title="Architects Are Playing With the Future of Design in Video Games"
                                            />
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid className={classes.paper} item xs={5} container style={{background:"#6A0BFF", color:"white",textAlign:"center"}}>
                                    <Typography className={classes.title}>
                                        <b>
                                            Architects Are Playing With the Future of Design in Video Games
                                        </b>
                                    </Typography>
                                    <Typography className={classes.headline}>
                                    Game worlds can be blueprints for the real world, liberating spaces where rules can be reinvented and the invisible made visible
                                    </Typography>
                                    <Typography className={classes.author}>
                                    Thomas McMullan<br/>
                                    Dec 9 - 6 min read
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid container>
                        <Container style={{marginBottom:"20px"}}>
                            <Grid container spacing={0} >
                                <Grid className={classes.paper} item xs={5} container style={{background:"white", color:"black",textAlign:"center"}}>
                                    <Typography className={classes.title}>
                                    <b>
                                    A Googler Explains Exactly How the Pixel 4 Captures the Night Sky
                                    </b>
                                    </Typography>
                                    <Typography className={classes.subTitle} style={{marginBottom:"10px"}}>
                                    We went stargazing with project manager Alex Schiffhauer to learn more about the new phone’s astrophotography mode
                                    </Typography>
                                    <Typography className={classes.author}>
                                    Aaron Cell
                                    </Typography>
                                    <Typography className={classes.infoDate}>
                                        Dec 3 - 2 min read
                                    </Typography>
                                    </Grid>
                                <Grid item xs={7}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="A Googler Explains Exactly How the Pixel 4 Captures the Night Sky"
                                            image="https://miro.medium.com/max/1200/1*MDxT8MJL3DmelDMv3-gd9A.gif"
                                            height="300"
                                            title="A Googler Explains Exactly How the Pixel 4 Captures the Night Sky"
                                            />
                                        </CardActionArea>
                                    </Card>
                                </Grid>  
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid container>
                        <Container style={{marginBottom:"20px"}}>
                            <Grid container spacing={0} style={{background:"red"}}>
                                <Grid item xs={7}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                            component="img"
                                            alt=" How to Totally Escape Ad Tracking at Home"
                                            height="300"
                                            image="https://miro.medium.com/max/3840/1*yYP8rlvTuCML1_N9AlQOTg.jpeg"
                                            title=" How to Totally Escape Ad Tracking at Home"
                                            />
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                     <Grid className={classes.paper} item xs={5} container style={{background:"#6b10cc", color:"white", textAlign:"center"}}>
                                        <Typography className={classes.title}>
                                        <b>
                                        How to Totally Escape Ad Tracking at Home
                                        </b>
                                        </Typography>
                                        <Typography style={{marginBottom:"10px"}} variant="body2" component="p" color="gray">
                                        Shutting down ad trackers at the network level is difficult, but not impossible
                                        </Typography>
                                        <Typography variant="body2" component="p" color="black">
                                        Owen Williams<br/>
                                        Dec 10 - 5 min read
                                        </Typography>
                                    </Grid>
                                </Grid>
                        </Container>
                    </Grid>
                    <Grid container>
                        <Container style={{marginBottom:"20px"}}>
                            <Grid container spacing={0}>
                                     <Grid className={classes.paper} item xs={12} container style={{padding:"0 100px 0 100px", background:"#daf832", color:"black", height:"200px", textAlign:"left"}}>
                                        <Typography className={classes.title}>
                                        <b>
                                            "We have a few new things to share."
                                        </b>
                                        </Typography>
                                        <Typography style={{marginBottom:"10px"}} variant="body2" component="p" color="gray">
                                        — Damon Beres
                                        </Typography>
                                        <Typography variant="body2" component="p" color="black">
                                        Welcome to a Refreshed OneZero 
                                        </Typography>
                                        <Typography>
                                        Dec 3 - 2 min read
                                        </Typography>
                                    </Grid>
                                </Grid>
                        </Container>
                    </Grid>
                    
                </Grid>
            </div>
        </Container>
    );

}
