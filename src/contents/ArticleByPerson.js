import React, { Component } from 'react';
import { Container, Typography, Grid, Avatar, IconButton, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TwitterIcon from '@material-ui/icons/Twitter';
import StarIcon from '@material-ui/icons/Star';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import ArticlePerPersonList from '../components/ArticlePerPersonList';

const articles = [
    {
        avatar: "https://miro.medium.com/fit/c/128/128/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg",
        profileName: "Andy Raskin in Firm Narrative",
        title: "To Create a New Category, Name the New Game",
        subTitle: "Brilliant category narratives evangelize a new discipline",
        infoDate: "Oct 17 · 9 min read",
        claps: "118",
        reponses: "5 Responses",
        imageArticle: "https://miro.medium.com/max/1997/1*y4LelR2DnDyrr9hanRI2_w.jpeg",
    },
    {
        avatar: "https://miro.medium.com/fit/c/128/128/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg",
        profileName: "Andy Raskin in The Startup",
        title: "The Fascinating Narrative War Between 2 Hot Startups",
        subTitle: "Because billions of dollars in valuation are at stake.",
        infoDate: "Nov 6 · 4 min read",
        claps: "246",
        reponses: "12 Responses",
        imageArticle: "https://miro.medium.com/max/2592/1*SO6E08sfvva1GKA4VBsxLw.jpeg",
    }
]
export default class ArticleByPerson extends Component {
    render() {
        return (
            <Container style={{ padding: "50px 250px 50px 250px", flexGrow: 1 }}>
                <Grid container direction="column" >
                    <Grid container direction="row">
                        <Grid item xs={8} style={{ paddingBottom: "15px" }} container direction="column">
                            <Grid container>
                                <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "10px" }}>
                                    <Typography variant="h5" style={{ fontWeight: "bold" }}>
                                        Andy Raskin
                                    </Typography>
                                </Grid>
                                <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <Button>
                                        Follow
                                    </Button>
                                </Grid>
                                <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <IconButton>
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid style={{ padding: "10px 0px 10px 0px" }}>
                                <Typography>Helping leaders tell strategic stories. Ex @skype @mashery @timeinc http://andyraskin.com</Typography>
                            </Grid>
                            <Grid container direction="row">
                                <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <Typography variant="caption">
                                        1.2K Following 33K Followers
                                    </Typography>
                                </Grid>
                                <Grid style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                    <IconButton>
                                        <TwitterIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} style={{ flex: 1, flexDirection: "row", display: "flex", justifyContent: "flex-end" }}>
                            <IconButton>
                                <Avatar
                                    alt="Avatar"
                                    style={{ width: "150px", height: "150px" }}
                                    src={
                                        "https://miro.medium.com/fit/c/128/128/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg"
                                    }
                                />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid style={{ borderBottom: "1px rgba(0,0,0,0.05) solid" }}>
                        <Button style={{ borderBottom: "1px black solid" }}>Profile</Button>
                        <Button>Claps</Button>
                        <Button>Highlights</Button>
                        <Button>Responses</Button>
                    </Grid>
                </Grid>
                <Grid style={{ paddingTop: "20px" }}>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>Featured</Typography>
                    <Grid container direction="column" style={{ border: "1px rgba(0,0,0,0.05) solid", padding: "15px" }}>
                        <Grid container item xs={12}>
                            <Grid item xs={1}>
                                <IconButton>
                                    <Avatar
                                        alt="Avatar"
                                        style={{ width: "40px", height: "40px" }}
                                        src={
                                            "https://miro.medium.com/fit/c/128/128/1*w1dyAyH5Pc_XysvAyd3C_Q.jpeg"
                                        }
                                    />
                                </IconButton>
                            </Grid>
                            <Grid item xs={10} container direction="column" style={{ padding: "0 10px 0 10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <Typography style={{ fontSize: "14px" }}>Andy Raskin in Mission.org</Typography>
                                <Typography style={{ fontSize: "14px" }}>Sep 15, 2016 · 8 min read</Typography>
                            </Grid>
                            <Grid item xs={1} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <StarIcon />
                            </Grid>
                        </Grid>
                        <Grid>
                            <Card style={{ marginBottom: "10px" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="The Greatest Sales Deck I’ve Ever Seen"
                                        image={
                                            "https://miro.medium.com/max/4195/1*cWrckQhDDGxKiwpb6YtPtg.jpeg"
                                        }
                                        height="200px"
                                        title="The Greatest Sales Deck I’ve Ever Seen"
                                    />
                                </CardActionArea>
                            </Card>
                            <Typography variant="h5" style={{ fontWeight: "bold" }}>The Greatest Sales Deck I’ve Ever Seen</Typography>
                            <Typography variant="h6" style={{ color: "grey" }}>It’s Zuora’s, and it’s brilliant. Here’s why.</Typography>
                        </Grid>
                        <Grid container style={{ paddingTop: "10px" }}>
                            <Grid container item xs={6}>
                                <Grid item xs={1}>
                                    <Avatar
                                        style={{ width: 20, height: 20 }}
                                        alt="Claps"
                                        src={"https://static.thenounproject.com/png/1085294-200.png"} />
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography variant="caption">22K</Typography>
                                </Grid>
                            </Grid>
                            <Grid container item xs={6} style={{ flex: 1, flexDirection: "row", display: "flex", justifyContent: "flex-end" }}>
                                <Grid style={{ justifyContent: "center", flexDirection: "column" }}>
                                    <Typography style={{ fontSize: "12px", fontWeight: "lighter" }}>65 Responses</Typography>
                                </Grid>
                                <Grid>
                                    <BookmarkIcon />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Typography>Latest</Typography>
                    {articles.map(item =>
                        <ArticlePerPersonList
                            avatar={item.avatar}
                            profileName={item.profileName}
                            title={item.title}
                            subTitle={item.subTitle}
                            infoDate={item.infoDate}
                            claps={item.claps}
                            reponses={item.reponses}
                            imageArticle={item.imageArticle}
                        />)}
                </Grid>
            </Container>
        )
    }
}
