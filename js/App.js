import React from 'react';
import ReactDom from "react-dom";
import 'bootstrap/scss/bootstrap.scss';
import '../css/App.scss';
import '../css/_reset.scss';
import {HashRouter} from 'react-router-dom'
import {Route} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AboutUs from "./AboutUs/AbousUs";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";
import Pricing from "./Pricing/Pricing";


const App = () => {
    return <HashRouter>
        <>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutUs} />
            <Route path='/pricing' component={Pricing} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/contact' component={Contact} />
        </>
    </HashRouter>;
}

ReactDom.render(<App/>, document.getElementById("app"))