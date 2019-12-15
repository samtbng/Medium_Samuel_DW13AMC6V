import React, { Component } from 'react';
import Header from '../components/Header';
import NewStory from '../contents/NewStory';
import Container from '@material-ui/core/Container';

class NewStoryLayout extends Component {
    render() {


        return (
            <div>
                <header>
                    <Container>
                        <Header />
                        <NewStory />
                    </Container>
                </header>
            </div >
        );
    }
}

export default NewStoryLayout;