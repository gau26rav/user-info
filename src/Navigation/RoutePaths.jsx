import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import React from 'react';
import App from './../App';
import SellComponent from './../sell-and-buy/sell-component';
import ContactUs from './../contact/contact-component';
import NotFound from './../not-found/not-found';

const routing = (
    /* Router does not return the control once it matches a certain path where as switch returns the control after one match */
    <Router>
        <ul>
            <li><Link to="/">All Users Information</Link></li>
            <li><Link to="/contact">Contact Us anytime</Link></li>
            <li><Link to="/sell"> Sell your stuff here</Link></li>
        </ul>
    {/* This div will contain the entire frames to be loaded. */}
    <Switch>
    <div id="container">
        <Route path = "/" exact={true} component={App}></Route>
        <Route path = "/sell" component={SellComponent}></Route>
        <Route path = "/contact" component={ContactUs}></Route>
        <Route component={NotFound}/>
    </div>
    </Switch>
</Router>);

export default routing;
    