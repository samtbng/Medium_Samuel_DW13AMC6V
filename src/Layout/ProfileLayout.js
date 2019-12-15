import React, { Component } from 'react';
import Header from '../components/Header';
import ProfilePage from '../contents/ProfilePage';
import Container from '@material-ui/core/Container';

class ProfileLayout extends Component {
    render() {


        return (
            <div>
                <header>
                    <Container>
                        <Header />
                        <ProfilePage />
                    </Container>
                </header>
            </div >
        );
    }
}

export default ProfileLayout;