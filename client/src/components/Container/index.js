import React from "react";
import PropTypes from "prop-types";
import { grid } from "./Container.module.scss";

const Container = ({ children }) => (
	<div css="width: 100%;max-width: 800px;margin: 0 auto;padding: 10px;text-align: left;">
		<div className={grid}>{children}</div>
	</div>
);

Container.propTypes = {
	children: PropTypes.node,
};

export default Container;
