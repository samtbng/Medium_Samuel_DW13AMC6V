import React, { Component } from 'react'
import {Grid, Paper, Typography, ButtonBase} from '@material-ui/core/';

export default class ListArticle extends Component {
	render() {
		return (
			<div>
                <Grid item xs spacing={5} >
                            <Grid Container justify="center" >
                                <Paper elevation="0" >
                                    <Grid container spacing={2}>
                                        <Grid item xs sm container>
                                            <Grid item xs container direction="column" spacing={0} style={{padding:"15px"}}>  
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
                                        <ButtonBase >
                                            <img alt="complex" style={{width: 200, height: 200}} src={this.props.gambar} />
                                        </ButtonBase>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                <div style={{margin:"30px 0 30px 0"}} ><hr/></div>
			</div>
		)
	}
}

