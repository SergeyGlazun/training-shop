import { combineReducers,configureStore} from "@reduxjs/toolkit";
import index from './reducers/index';

const rootReducer = combineReducers({
    toolkit:index
})

const store = configureStore({
    reducer:rootReducer,
})
export default store ;