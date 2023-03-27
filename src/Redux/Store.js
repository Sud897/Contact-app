import {createStore } from "redux";
import contactReducer from "./Reducer";
// const rootReducer = combineReducers({ Reducer: contactReducer });
const store = createStore(contactReducer);
export default store;
