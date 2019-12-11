import React, { Component } from 'react'
import {Grid, Paper, ButtonBase, Typography} from '@material-ui/core/';

export default class ListArticle extends Component {
	render() {
		return (
			<div>
				<Grid container justify="center" >
          <Paper elevation="0" style={{ height: 120}}>
            <Grid container spacing={2} >
            <Grid item xs={4}>
              <ButtonBase>
                <img style={{ width: 100, height: 100 }} alt="gambar" src={this.props.gambar} />
              </ButtonBase>
            </Grid>
              <Grid item xs={8} sm container>
                  <Typography component="h7" style={{FontWeight:"bold"}}>
                    {this.props.title}
                  </Typography>
                  <Typography variant="subtitle2"style={{fontSize:"12", marginBottom:"5px"}}>
                  {this.props.subTitle}
                  </Typography>
                  <Typography variant="body2" component="p" color="black">
                    {this.props.author}
                  </Typography>
                  <Typography color="textSecondary" variant="caption">
                  {this.props.infoDate}
                  </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
			</div>
		)
	}
}