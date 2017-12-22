// let's go!
import React from 'react';
import { render } from 'react-dom'; //renders to HTML

//import css; webpack handles all CSS loading
import css from './styles/style.styl';

//import Components
import Main from './components/Main'
import Single from './components/Single'
import NotesGrid from './components/NotesGrid'


//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//ROUTER IS ALSO COMPONENT! WOAH!
//if matches the '/', grab the main component; notes grid & Single will be childeren of the main component (cclone elements in single.js)
//indexRoute is used if it is just '/' in url, it renders IndexRoute
//postId is a variable with and ID that we store
//browser history - allows to push changes to URLS without having to reload the page
const router=(
<Router history={browserHistory}>
    <Route path="/" component= {Main}>
        <IndexRoute component={NotesGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
    </Route>  
</Router>
)


//render (text, onHTML)
render(router, document.getElementById('root'));