import React from "react";
import PropTypes from "prop-types";
import { animation, grid } from "./Container.module.scss";

const Container = ({ animated, children }) => (
	<div css="width: 100%;max-width: 800px;margin: 0 auto;padding: 10px;text-align: left;">
		<div className={`${grid} ${animated ? animation : ""}`}>{children}</div>
	</div>
);

Container.propTypes = {
	animated: PropTypes.bool,
	children: PropTypes.node,
};

export default Container;
