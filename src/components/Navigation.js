import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{position:'sticky', top:"0", zIndex:"1000"}}>
      <AppBar position="static" elevation="0" style={{background:"white", alignItems:"center"}}>
        <Toolbar>
          <Button>Home</Button>
          <Link to="/CategoryPage"><Button>One Zero</Button></Link>
          <Button>Elemental</Button>
          <Button>Zora</Button>
          <Button>Force</Button>
          <Button>Human Parts</Button>
          <Button>Marker</Button>
          <Button>Zora</Button>
          <Button>Heated</Button>
          <Button>Modus</Button>
          <Button>More</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}