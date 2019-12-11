import React, { Component } from 'react'
import {Grid, Paper, Typography, ButtonBase} from '@material-ui/core/';
import BookmarkIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default class ListArticle extends Component {
	render() {
		return (
			<div>
                <Grid item xs style={{margin:"15px"}}>
                            <Grid Container justify="center" >
                                <Paper elevation="0" >
                                    <Grid container spacing={2}>
                                        <Grid item xs sm container>
                                            <Grid item xs container direction="column" spacing={0} style={{padding:"0 15px 15px 15px"}}>
                                                <Typography color="textSecondary" style={{marginBottom:"0px"}} variant="caption">
                                                    {this.props.info}
                                                </Typography>       
                                                <Typography variant="h6">
                                                    <b>
                                                    {this.props.title}
                                                    </b>
                                                </Typography>
                                                <Typography color="textSecondary" style={{marginBottom:"10px"}} variant="subtitle2">
                                                    {this.props.subTitle}
                                                </Typography>
                                                <Typography  variant="subtitle2">
                                                    {this.props.author}
                                                </Typography>
                                                <Typography color="textSecondary" variant="caption">
                                                {this.props.infoDate}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <BookmarkIcon style={{margin:'5px'}} />
                                        <MoreHorizIcon style={{margin:'5px'}}/>
                                        <ButtonBase >
                                            <img alt="complex" style={{width: 200, height: 200}} src={this.props.gambar} />
                                        </ButtonBase>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
			</div>
		)
	}
}

