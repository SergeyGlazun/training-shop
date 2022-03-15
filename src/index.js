import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import {HashRouter as Router} from "react-router-dom";
import ErrorBoundry from './components/error-boundry';
import store from './store.js';

import './index.scss';

ReactDOM.render(
  <React.StrictMode> 
     <Provider store={store}>
        {/* <ErrorBoundry>          */}
                <Router>
                   <App />    
                </Router>         
        {/* </ErrorBoundry>          */}
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

