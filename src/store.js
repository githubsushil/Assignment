import {createStore , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import {combineReducers} from "redux";
import reducer from "./redux/reducer";
import searchReducer from "./movieRedux/movieReducer/searchReducer";

const rootReducer= combineReducers({
    reducer:reducer,
    movie:searchReducer
});

const middleware = [thunk];

 const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)))

export default store;
