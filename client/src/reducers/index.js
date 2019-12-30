import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./Users";
import serverReducer from "./Server";

const reducers = {
	server: serverReducer,
	users: userReducer,
};

export default history =>
	combineReducers({ router: connectRouter(history), ...reducers });
