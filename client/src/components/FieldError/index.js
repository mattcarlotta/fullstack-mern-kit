import React from "react";
import PropTypes from "prop-types";
import { errorStyle } from "./FieldError.module.scss";

const FieldError = ({ hasError, isRequired }) =>
	isRequired && hasError ? (
		<span className={errorStyle}>Required!</span>
	) : (
		<span css="margin: 0;opacity: 0;">&nbsp;</span>
	);

FieldError.propTypes = {
	hasError: PropTypes.bool.isRequired,
	isRequired: PropTypes.bool,
};

export default FieldError;
