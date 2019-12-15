import React, { Component } from 'react';
import Header from '../components/Header';
import Comment from '../contents/Comment';
import Container from '@material-ui/core/Container';

class CommentLayout extends Component {
    render() {


        return (
            <div>
                <header>
                    <Container>
                        <Header />
                        <Comment />
                    </Container>
                </header>
            </div >
        );
    }
}

export default CommentLayout;