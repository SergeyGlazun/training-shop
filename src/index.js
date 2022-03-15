import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import {HashRouter as Router} from "react-router-dom";

import ErrorBoundry from './components/error-boundry';
import ShopService from './services/shopService';
import ShopServiceContext from './components/shop-service-context';
import store from './store.js';

import './index.scss';

const shopServise = new ShopService();

ReactDOM.render(
 
  <React.StrictMode> 
     <Provider store={store}>
        <ErrorBoundry>
            <ShopServiceContext.Provider value={shopServise}>
                <Router>
                   <App />    
                </Router> 
            </ShopServiceContext.Provider>
        </ErrorBoundry>         
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

