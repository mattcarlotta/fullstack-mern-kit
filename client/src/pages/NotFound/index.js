import React from "react";
import DynamicImport from "~components/DynamicImport";

const ShowUsersPage = props => (
	<DynamicImport
		{...props}
		loadFile={() =>
			import(/*  webpackChunkName: "showusers" */ "~components/NotFound")
		}
	/>
);

export default ShowUsersPage;
