import {
    combineReducers,
    configureStore
} from "@reduxjs/toolkit";

import createSagaMiddleware from 'redux-saga';
import actionsBasket from './reducers/actionBasket';
import getProdus from "./reducers/getProdus";
import appReducer from "./reducers/appReducer";
import selectTipeProductAction from './reducers/selectedProductType';
import actionEmailPost from "./reducers/actionEmailPost";
import actionReviesPost from "./reducers/actionReview";
import {rootSaga} from "./reducers/saga/index";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    toolkit: actionsBasket,
    getproduct: getProdus,
    app: appReducer,
    selectProductTipe: selectTipeProductAction,
    validationChek:actionEmailPost,
    postReviewReducer:actionReviesPost
})

const store = configureStore({
    reducer: rootReducer,
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga)

export default store;