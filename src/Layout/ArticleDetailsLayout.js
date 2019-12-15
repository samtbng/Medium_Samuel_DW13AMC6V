import React, { Component } from 'react';
import Header from '../components/Header';
import ArticleDetails from '../contents/ArticleDetails';
import RelatedArticle from '../components/RelatedArticle';
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';

class ArticleDetailsLayout extends Component {
    render() {


        return (
            <div>
                <header>
                    <Container>
                        <Header />
                        <ArticleDetails />
                        <RelatedArticle />
                        <Footer />
                    </Container>
                </header>
            </div >
        );
    }
}

export default ArticleDetailsLayout;