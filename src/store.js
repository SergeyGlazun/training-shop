import { combineReducers,configureStore} from "@reduxjs/toolkit";
import index from './reducers/index';
import getProdus from "./reducers/getProdus";
import appReducer from "./reducers/appReducer";
import createSagaMiddleware from 'redux-saga';


import mySaga from "./reducers/saga/productSaga";



const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    toolkit:index,
    getproduct:getProdus,
    app:appReducer
})

const store = configureStore({
    reducer:rootReducer,
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),  
    middleware:[sagaMiddleware]
  
});

sagaMiddleware.run(mySaga)

export default store ;