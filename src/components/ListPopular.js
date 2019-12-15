import React, { Component } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core/';

export default class ListArticle extends Component {
    render() {
        return (
            <div>
                <Grid item xs >
                    <Grid container justify="center">
                        <Paper elevation="0" style={{ height: "120px", }} >
                            <Grid container spacing={3}>
                                <Grid item>
                                    <Typography color="textSecondary" variant="h4">{this.props.rank}</Typography>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Typography component="h6">
                                            <b>
                                                {this.props.title}
                                            </b>
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            {this.props.author}
                                        </Typography>
                                        <Typography color="textSecondary" variant="caption">
                                            {this.props.infoDate}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

