import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "@reducers";
import Routes from "@routes";
import rootSagas from "@sagas";

export const saga = createSagaMiddleware();
const history = createBrowserHistory();
const middlewares = applyMiddleware(saga, routerMiddleware(history));

export const store = createStore(
	createRootReducer(history),
	composeWithDevTools(middlewares),
);

saga.run(rootSagas);

const Root = () => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes />
		</ConnectedRouter>
	</Provider>
);

export default Root;
