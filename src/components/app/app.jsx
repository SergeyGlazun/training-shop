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
    const [particularNames, particularsCheck] = useState('');
    const [condition, setCondition] = useState(false);

    const alert = useSelector(state => state.app.alert);

    return (
        <div className='app' data-test-id='app'>
            <ScrollUp top={{ scroll: 0 }} />        
            <Header particularNames={particularNames} particularsCheck={particularsCheck} />
             {alert && <Alert text={"ошибка загрузки"}/>}
            <Switch>
                <Route exact path='/training-shop'>
                    <MainPage particularNames={particularNames} particularsCheck={particularsCheck} />
                </Route>
                <Route exact path='/'>
                    <MainPage particularNames={particularNames} particularsCheck={particularsCheck} />
                </Route>

                <Route exact path='/men'>
                    <ProductsPage productType='men' particularNames={particularNames} particularsCheck={particularsCheck} condition={condition} setCondition={setCondition} />
                </Route>

                <Route exact path='/women'>
                    <ProductsPage productType='women' particularNames={particularNames} particularsCheck={particularsCheck} condition={condition} setCondition={setCondition} />
                </Route>

                <Route exact path='/women/:id'>
                    <ProductItem productType='women' particularNames={particularNames} particularsCheck={particularsCheck} />
                </Route>

                <Route path='/men/:id'>
                    <ProductItem productType='men' particularNames={particularNames} particularsCheck={particularsCheck} />
                </Route>

            </Switch>

            <Footer />
        </div>
    );
}

export default App;