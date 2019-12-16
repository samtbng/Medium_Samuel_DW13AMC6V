import React, { Component } from 'react';
import Header from '../components/Header';
import ArticleByPerson from '../contents/ArticleByPerson';
import Container from '@material-ui/core/Container';

class ProfileLayout extends Component {
    render() {


        return (
            <div>
                <header>
                    <Container>
                        <Header />
                        <ArticleByPerson />
                    </Container>
                </header>
            </div >
        );
    }
}

export default ProfileLayout;