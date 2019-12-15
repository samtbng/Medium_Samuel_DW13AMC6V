import React, { Component } from 'react';
import Header from '../components/Header';
import Story from '../contents/Story';
import Container from '@material-ui/core/Container';

class StoryLayout extends Component {
    render() {


        return (
            <div>
                <header>
                    <Container>
                        <Header />
                        <Story />
                    </Container>
                </header>
            </div >
        );
    }
}

export default StoryLayout;