import React, { Component } from 'react';
import Header from '../components/Header';
import Bookmark from '../contents/Bookmark';
import Container from '@material-ui/core/Container';

class BookmarkLayout extends Component {
    render() {


        return (
            <div>
                <header>
                    <Container>
                        <Header />
                        <Bookmark />
                    </Container>
                </header>
            </div >
        );
    }
}

export default BookmarkLayout;