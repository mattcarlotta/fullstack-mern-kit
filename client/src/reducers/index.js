import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./Users";

const reducers = {
	users: userReducer,
};

export default history =>
	combineReducers({ router: connectRouter(history), ...reducers });
