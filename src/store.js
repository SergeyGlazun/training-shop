import {
    combineReducers,
    configureStore
} from "@reduxjs/toolkit";

import createSagaMiddleware from 'redux-saga';
import actionsBasket from './reducers/actionBasket';
import getProdus from "./reducers/getProdus";
import appReducer from "./reducers/appReducer";
import selectTipeProductAction from './reducers/selectedProductType';

import mySaga from "./reducers/saga/productSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    toolkit: actionsBasket,
    getproduct: getProdus,
    app: appReducer,
    selectProductTipe: selectTipeProductAction
})

const store = configureStore({
    reducer: rootReducer,
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(mySaga)

export default store;