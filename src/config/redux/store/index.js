import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import Reducer from "../reducer";

export const Store  = createStore(Reducer, applyMiddleware(thunk));