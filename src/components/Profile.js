import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar'

export default class Login extends Component{

    render(){

        return(
            <div style={{width:"200px"}}>
                <Grid
                container
                direction="column"
                justify="flex-start"
                >
                    <Grid container>
                        <Grid item xs style={{paddingLeft:"10px"}}>
                            <IconButton>
                                <Avatar alt="Claps" src={"https://miro.medium.com/fit/c/256/256/1*5HuPOJPsdTfmCoYOYwtCpw.jpeg"}/>
                            </IconButton>
                        </Grid>
                        <Grid style={{padding:"10px 10px 0px 0px"}}>
                            <Typography>
                                Samuel Tobing
                            </Typography>
                            <Typography>
                                @samtbng
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid>
                        <MenuItem>Become a member</MenuItem>
                    </Grid>
                    <Divider/>
                    <Grid>
                        <MenuItem>New Story</MenuItem>
                        <MenuItem>Stories</MenuItem>
                        <MenuItem>Stats</MenuItem>
                    </Grid>
                    <Divider/>
                    <Grid>
                        <MenuItem>Bookmarks</MenuItem>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Settings</MenuItem>
                        <MenuItem>Help</MenuItem>
                        <MenuItem>Sign Out</MenuItem>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

