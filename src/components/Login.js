import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Link from "@material-ui/core/Link";

export default class Login extends Component {
  render() {
    return (
      <div style={{ rootGrow: 1, padding: "50px" }}>
        <Grid container justify="center" spacing={0}>
          <Grid item xs={12} sm={3}></Grid>
          <Grid item xs sm={6}>
            <div className="App-header">
              <DialogTitle id="customized-dialog-title">
                Sign in with email
              </DialogTitle>
              <DialogContent>
                <div className="App-header">
                  <DialogContentText>
                    Enter the email address associated with your account, and
                    we’ll send a magic link to your inbox.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Your Email"
                    type="text"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    label="Your Password"
                    type="password"
                    fullWidth
                  />
                  <div
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <Button style={{ background: "black", color: "white" }}>
                      Continue
                    </Button>
                  </div>
                </div>
              </DialogContent>
              <DialogContentText>
                <text>
                  <Link onClick={this.props.callBack} href="#">
                    {"<"} All Sign in Options
                  </Link>
                </text>
              </DialogContentText>
              <DialogContentText style={{ justifyContent: "flex-end" }}>
                To make Medium work, we log user data and share it with service
                providers. Click “Sign Up” above to accept Medium’s{" "}
                <Link href="#">
                  <u>Terms of Service</u>
                </Link>{" "}
                &{" "}
                <Link href="#">
                  <u>Privacy Policy</u>
                </Link>
                .
              </DialogContentText>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}></Grid>
        </Grid>
      </div>
    );
  }
}
