import React from 'react';
import ReactDom from "react-dom";
import 'bootstrap/scss/bootstrap.scss';
import '../css/App.scss';
import '../css/_reset.scss';
import {HashRouter} from 'react-router-dom'
import {Route} from "react-router-dom";
import HomePage from "./HomePage";
import AboutUs from "./AbousUs";


const App = () => {
    return <HashRouter>
        <>
            <Route exact path='/' component={HomePage}  />
            <Route path='/about' component={AboutUs} />
        </>
    </HashRouter>;
}

ReactDom.render(<App/>, document.getElementById("app"))

