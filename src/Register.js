import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';
import './App.css';

export default function Register() {
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Register
      </Button>
      <Dialog maxWidth="md" open={open} onClose={handleClose} aria-labelledby="customized-dialog-title">
      <div>
      <Grid container justify="center" spacing={0}>
        <Grid>
        <img src="./left.png"></img></Grid>
        <Grid item xs>
        <div className="App-header">
          <DialogTitle id="customized-dialog-title">Join Medium.</DialogTitle>
        <DialogContent>
        <div>
          <DialogContentText>
          Create an account to receive great stories in your inbox, 
          personalize your homepage, and follow authors and topics that you love.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Your Username"
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
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Your Email"
            type="text"
            fullWidth
          />
          </div>
        </DialogContent>
        <DialogActions>
          <div>
          <Button style={{backgroundColor:"black", color:"white"}} onClick={handleClose} >
            Registration
          </Button>
          </div>
        </DialogActions>
        <DialogContentText>
        Already have an account?<Button style={{backgroundColor:"white", color:"green"}}>
            Sign in
          </Button>
        </DialogContentText>
        <DialogContentText>
        To make Medium work, we log user data and share it with service providers. 
        Click “Sign Up” above to accept Medium’s <Link href="#">Terms of Service</Link> & <Link href="#">Privacy Policy</Link>.
        </DialogContentText>
        </div>
        </Grid>
        <Grid>
        <img src="./right.png"></img>
        </Grid>
      </Grid>
    </div>
    </Dialog>
    </div>
  );
}