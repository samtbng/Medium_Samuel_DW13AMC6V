import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Home from './Home';
import Home2 from './Home2';
import {Container, Divider} from '@material-ui/core';

function App(){
  return (
    <div>
      <header>
        <Container>
        <Header/>
        <Navigation/>
        <Home/>
        <Divider style={{margin:"10px"}} />
        <Home2/>
        </Container>
      </header>
    </div>
  );
}

export default App;