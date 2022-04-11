import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom'
import { useSelector } from "react-redux";
import Header from "../header";
import MainPage from "../../pages/mainPage/mainPage.jsx";
import ProductsPage from "../../pages/productPage";
import Footer from "../footer";
import ProductItem from "../../pages/productPage/productInformationPage";
import ScrollUp from "../function/scrollUp";
import { Alert } from "../alert/alert";

import './app.scss';

const App = () => {  
    const [condition, setCondition] = useState(false);
    const alert = useSelector(state => state.app.alert);
   
    return (
        <div className='app' data-test-id='app'>
            <ScrollUp top={{ scroll: 0 }} />        
            <Header/>
             {alert && <Alert text={"ошибка загрузки"}/>}
            <Switch>
                <Route exact path='/training-shop'>
                    <MainPage/>
                </Route>
                <Route exact path='/'>
                    <MainPage/>
                </Route>

                <Route exact path='/men'>
                <ScrollUp top={{scroll:220}}/>
                    <ProductsPage productType='men'  condition={condition} setCondition={setCondition} />
                </Route>

                <Route exact path='/women'>
                <ScrollUp top={{scroll:220}}/>
                    <ProductsPage productType='women'  condition={condition} setCondition={setCondition} />
                </Route>

                <Route exact path='/women/:id'>
                    <ProductItem productType='women'/>
                </Route>

                <Route path='/men/:id'>
                    <ProductItem productType='men'/>
                </Route>

            </Switch>

            <Footer />
        </div>
    );
}

export default App;