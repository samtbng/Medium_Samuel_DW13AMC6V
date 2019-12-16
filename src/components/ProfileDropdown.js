import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

export default class ProfileDropdown extends Component {
  render() {
    return (
      <div style={{ width: "200px" }}>
        <Grid container direction="column" justify="flex-start">
          <Grid container>
            <Grid item xs style={{ paddingLeft: "10px" }}>
              <IconButton>
                <Avatar
                  alt="avatar"
                  src={
                    "https://miro.medium.com/fit/c/256/256/1*5HuPOJPsdTfmCoYOYwtCpw.jpeg"
                  }
                />
              </IconButton>
            </Grid>
            <Grid style={{ padding: "10px 10px 0px 0px" }}>
              <Typography>Samuel Tobing</Typography>
              <Typography>@samtbng</Typography>
            </Grid>
          </Grid>
          <Grid>
            <MenuItem>Become a member</MenuItem>
          </Grid>
          <Divider />
          <Grid>
            <Link to="/new_story">
              <MenuItem>New Story</MenuItem>
            </Link>
            <Link to="/stories">
              <MenuItem>Stories</MenuItem>
            </Link>
            <Link to="/stats">
              <MenuItem>Stats</MenuItem>
            </Link>
          </Grid>
          <Divider />
          <Grid>
            <Link to="/bookmarks">
              <MenuItem>Bookmarks</MenuItem>
            </Link>
            <Link to="/profile">
              <MenuItem>Profile</MenuItem>
            </Link>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Help</MenuItem>
            <MenuItem>Sign Out</MenuItem>
          </Grid>
        </Grid>
      </div>
    );
  }
}
