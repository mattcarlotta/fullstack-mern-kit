import React from "react";
import PropTypes from "prop-types";
import { errorContainer, errorStyle } from "./FormError.module.scss";

const FormError = ({ hasError }) =>
	hasError ? (
		<div className={errorContainer}>
			<p className={errorStyle}>{hasError}</p>
		</div>
	) : null;

FormError.propTypes = {
	hasError: PropTypes.string,
};

export default FormError;
