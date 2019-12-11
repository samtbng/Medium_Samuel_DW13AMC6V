import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';
import Login from '../components/Login';
import '../App.css';
const useStyles = makeStyles(theme=> ({
  dialog:{
    width:'100%',
    minHeight:'550px',
    borderRadius:'4px',
    height:'100%',
    flexDirection:'column',
    display:'block',
    justifyContent: 'center',
    alignItems: 'center'
  },
  middleBox:{
    width:'360px',
    padding:'10px 16px',
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
  },
  headerBox:{
    textAlign:'center',
  },
  headerText:{
    lineHeight:'36px',
    fontSize:'32px',
    margin:'0px',
  },
  middleUpperText:{
    fontSize:"12px",
  },

}));
export default function Register() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const handleClickOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };
  const handleCallbackLogin = (childData) => {
    setOpenLogin(childData);
  };
  const handleCallbackRegister = (childData) => {
    setOpen(childData);
  };
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
      <Dialog className={classes.dialog} maxWidth="md" maxHeight="md" open={open} onClose={handleClose} aria-labelledby="customized-dialog-title">
        <div style={{alignItems:"center"}} >
          <Grid maxwidth="md" maxHeight="md" container justify="center" spacing={0}>
          <Grid item xs={12} sm={3}> 
          <img src="./left.png" alt=""></img>
          </Grid>
          <Grid item xs={12} sm={6}>
           <div  className={classes.middleBox} >
             <div className={classes.headerBox}>
                <DialogTitle id="customized-dialog-title"><p className={classes.headerText}>Join Medium.</p></DialogTitle>
                  <DialogContent>
                    <div>
                      <DialogContentText>
                        <h4 className={classes.middleUpperText}>
                          Create an account to receive great stories in your inbox, 
                        personalize your homepage, and follow authors and topics that you love.
                        </h4>
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
                    <div style={{flexDirection: "row", justifyContent: "center"}}>
                      <Button style={{backgroundColor:"black", color:"white" }} onClick={handleClose} >
                        Registration
                      </Button>
                    </div>
                  <DialogContentText>
                    <h4 className={classes.middleUpperText}>
                    Already have an account?
                      <Button style={{backgroundColor:"white", color:"green"}} onClick={function(event){ handleClose(); handleClickOpenLogin()}}>
                        Sign in
                      </Button>
                    </h4>
                  </DialogContentText>
                  <DialogContentText>
                    <h4 className={classes.middleUpperText}>
                    To make Medium work, we log user data and share it with service providers. 
                    Click “Sign Up” above to accept Medium’s <Link href="#">Terms of Service</Link> & <Link href="#">Privacy Policy</Link>.
                    </h4>
                  </DialogContentText>
                 </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={3}>
                <img src="./right.png" alt=""></img>
              </Grid>
            </Grid>
          </div>
        </Dialog>
        <Dialog className={classes.dialog} maxWidth="md" style={{minHeight:"550px"}} open={openLogin} onClose={function(event){ handleClose(); handleCloseLogin()}} aria-labelledby="customized-dialog-title">
          <Login closeDialogLogin = {handleCallbackLogin} openDialogRegister={handleCallbackRegister}/>
        </Dialog>
      </div>
   );
}