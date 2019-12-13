import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CategoryPage from './contents/CategoryPage';
import ArticleDetails from './contents/ArticleDetails';
import Comment from './contents/Comment';
import NewStory from './contents/NewStory';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route exact path="/category_page" component={CategoryPage}/>
            <Route exact path="/article_details" component={ArticleDetails}/>
            <Route exact path="/comment" component={Comment}/>
            <Route exact path="/new_story" component={NewStory}/>
        </div>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
