import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Helmet from "react-helmet";

import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import ShowUsers from "@pages/ShowUsers";
import Toast from "@components/Toast";
import GlobalStylesheet from "@styles/globalStylesheet";

const config = {
	htmlAttributes: { lang: "en" },
	title: "MERN Kit",
	titleTemplate: "MERN Kit - %s",
	meta: [
		{
			name: "description",
			content: "The best MERN starter boilerplate in the world.",
		},
	],
};

Toast({ type: "info", message: "Welcome to the Fullstack M.E.R.N. Kit!" });

const Routes = () => (
	<div css="height: 100%;width: 100%;">
		<Helmet {...config} />
		<GlobalStylesheet />
		<ToastContainer
			position="top-right"
			autoClose={2500}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick={false}
			pauseOnVisibilityChange
			draggable
			pauseOnHover
		/>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/users" component={ShowUsers} />
			<Route component={NotFound} />
		</Switch>
	</div>
);

export default Routes;
