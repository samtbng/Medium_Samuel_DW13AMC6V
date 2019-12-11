import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

export default class Login extends Component{

    render(){

        return(
            <div style={{width:"200px"}}>
                <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="left"
                >
                    <Grid container>
                        <Grid item xs style={{paddingLeft:"10px"}}>
                            <IconButton>
                                
                            <AccountCircle fontSize="large/"></AccountCircle>
                            </IconButton>
                        </Grid>
                        <Grid style={{paddingRight:"10px"}}>
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

