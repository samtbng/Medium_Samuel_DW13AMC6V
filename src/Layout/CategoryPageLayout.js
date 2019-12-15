import React, { Component } from 'react';
import Header from '../components/Header';
import CategoryPage from '../contents/CategoryPage';
import Container from '@material-ui/core/Container';

class CategoryPageLayout extends Component {
    render() {


        return (
            <div>
                <header>
                    <Container>
                        <Header />
                        <CategoryPage />
                    </Container>
                </header>
            </div >
        );
    }
}

export default CategoryPageLayout;