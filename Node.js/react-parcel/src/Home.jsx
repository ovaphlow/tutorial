import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(<Index />, document.getElementById('app'));

function Index() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/1"><Home1 /></Route>
            </Switch>
        </HashRouter>
    )
}

function Home() {
    return (
        <h1>
            HOME
            <br />
            <a href="about.html">ABOUT</a>
            <br />
            <a href="#/1">HOME 1</a>
        </h1>
    )
}

function Home1() {
    return (
        <h1>
            HOME 1
            <br />
            <a href="#/">BACK</a>
        </h1>
    )
}
