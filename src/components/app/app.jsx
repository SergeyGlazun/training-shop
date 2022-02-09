import React from "react";
import { Route, Switch } from 'react-router-dom'

import Header from "../header";
import MainPage from "../../pages/mainPage/mainPage.jsx";
import ManPage from "../../pages/productPage/manPage/manPage.jsx";

import './app.scss';

const App = () => {
    
    return (
        <div className='app' data-test-id='app'>
            <Header />
           
            <Switch>
            <Route exact path='/training-shop'>
                   <MainPage/>
                </Route>
                <Route exact path='/'>
                   <MainPage/>
                </Route>

                <Route exact path='/men'>
                   <ManPage/>
                </Route>
            </Switch>     
        </div>
    );
}

export default App;