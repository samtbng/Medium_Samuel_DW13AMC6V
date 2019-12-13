import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Divider, Container} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles(theme => ({

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
    avatar:{
        width:"50px",
        height:"50px",
    },
    profileName:{
        fontSize:"13px",
        lineHeight:"14px",
        paddingBottom:"10px",
    },
    iconSmall:{
        width:"20px",
        height:"20px",
        margin:"0 10px 0 10px"
    },
    indicator:{
        fontSize:"12px",
        lineHeight:"14px",
        fontWeight:"bold"
    },
    moreText:{
        fontSize:"20px",
        lineHeight:"26px",
        fontWeight:"600",
    },
    titleStyle:{
        fontSize:"24px",
        lineHeight:"27px",
        fontWeight:"500",
        padding:"10px 0px 10px 0px"
    },

}));

const articles = [
    {
        id: 1,
        title: 'If You Only Read A Few Books In 2018, Read These',
        avatar: 'https://miro.medium.com/fit/c/128/128/0*oxw8NBp_Td0n3l4_.png',
        author: 'Ryan Holiday',
        infoDate: 'Jun 26, 2018 - 10 min read',
        gambar: 'https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg'
      },
      {
        id: 2,
        title: 'What We Should Have Learned in School But Never Did',
        avatar: 'https://miro.medium.com/fit/c/128/128/1*rs4jxjHV9l55BEN2rzJ5Cg.jpeg',
        author: 'Srinivas Rao',
        infoDate: 'Jan 25, 2018 - 23 min read',
        gambar: 'https://miro.medium.com/max/5515/0*syfFJWLOzLoNRUbF.'
      },
      {
        id: 3,
        title: 'Why Most People Will Never Have Great Relationships',
        avatar: 'https://miro.medium.com/fit/c/128/128/0*oxw8NBp_Td0n3l4_.png',
        author: 'Anthony Moore',
        infoDate: 'Apr 27, 2018 - 8 min read',
        gambar: 'https://miro.medium.com/max/5184/0*NJynXbxsOu95yXtx.'
      },
  ]
export default function RelatedArticle(){
    const classes = useStyles();

    return(
        <div className={classes.root} style={{background:"rgba(0,0,0,0.05)"}}>
            <Container style={{padding:"20px 0px 20px 0px"}}>
                <Typography className={classes.moreText}>More From Medium</Typography>
                <Divider style={{marginBottom:"20px"}}/>
                <div className={classes.divRow}>
                    {articles.map(items =>
                        <div className={classes.divColumn} style={{margin:"0px 5px 0px 5px"}}>
                                <Typography style={{paddingBottom:"10px"}} variant="caption" color="textSecondary">More from mission.org</Typography>
                                <Card elevation="0">
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt={items.title}
                                    image={items.gambar}
                                    title={items.title}
                                    style={{minHeight:"300px"}}
                                    />
                                </CardActionArea>
                            </Card>
                            <Typography className={classes.titleStyle}>{items.title}</Typography>
                            <div className={classes.divRow} style={{marginBottom:"50px"}}>
                                <div style={{marginRight:"10px"}}>
                                    <Avatar className={classes.avatar} alt={items.author} src={items.avatar} />
                                </div>
                                <div className={classes.divColumn} style={{justifyContent:"center"}}>
                                        <Typography className={classes.profileName} variant="caption">{items.author} in mission.org</Typography>
                                
                                        <Typography className={classes.profileName} color="textSecondary">
                                            {items.infoDate}
                                        </Typography>           
                                
                                </div>
                                <div style={{justifyContent:"flex-end", top:"50%"}} className={classes.divRow}>
                                    <Avatar className={classes.iconSmall} alt="Claps" src={"https://static.thenounproject.com/png/1085294-200.png"}/>
                                    <Typography style={{margin:"5px"}} className={classes.indicator}>88K</Typography>
                                    <BookmarkIcon className={classes.iconSmall}/>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}