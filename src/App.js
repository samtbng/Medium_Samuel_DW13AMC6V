import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './contents/Home';
import Home2 from './contents/Home2';
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