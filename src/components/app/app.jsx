import React from "react";
import { Route, Switch } from 'react-router-dom'

import Header from "../header";
import MainPage from "../../pages/mainPage/mainPage.jsx";
import ProductsPage from "../../pages/productPage";
import Footer from "../footer";
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
                   <ProductsPage productType='men'/>
                </Route>

                <Route exact path='/women'>
                   <ProductsPage productType='women'/>
                </Route>
            </Switch> 
              
        <Footer/>
        </div>
    );
}

export default App;