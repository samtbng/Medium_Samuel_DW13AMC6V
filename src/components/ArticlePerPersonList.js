import React, { Component } from 'react'
import { Grid, IconButton, Avatar, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import StarIcon from '@material-ui/icons/Star';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';

export default class ArticlePerPersonList extends Component {
    render() {
        return (
            <Grid container direction="column" style={{ border: "1px rgba(0,0,0,0.05) solid", padding: "15px", marginBottom: "20px" }}>
                <Grid container item xs={12}>
                    <Grid item xs={1}>
                        <IconButton>
                            <Avatar
                                alt="Avatar"
                                style={{ width: "40px", height: "40px" }}
                                src={this.props.avatar}
                            />
                        </IconButton>
                    </Grid>
                    <Grid item xs={10} container direction="column" style={{ padding: "0 10px 0 10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <Typography style={{ fontSize: "14px" }}>{this.props.profileName}</Typography>
                        <Typography style={{ fontSize: "14px" }}>{this.props.infoDate}</Typography>
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
                                image={this.props.imageArticle}
                                height="200px"
                                title="The Greatest Sales Deck I’ve Ever Seen"
                            />
                        </CardActionArea>
                    </Card>
                    <Typography variant="h5" style={{ fontWeight: "bold" }}>{this.props.title}</Typography>
                    <Typography variant="h6" style={{ color: "grey" }}>{this.props.subTitle}</Typography>
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
                            <Typography variant="caption">{this.props.claps}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={6} style={{ flex: 1, flexDirection: "row", display: "flex", justifyContent: "flex-end" }}>
                        <Grid style={{ justifyContent: "center", flexDirection: "column" }}>
                            <Typography style={{ fontSize: "12px", fontWeight: "lighter" }}>{this.props.responses}</Typography>
                        </Grid>
                        <Grid>
                            <BookmarkIcon />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
