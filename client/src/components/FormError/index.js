import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { errorContainer, errorStyle } from "./FormError.module.scss";

const FormError = ({ hasError, onHandleClose }) =>
	hasError ? (
		<div className={errorContainer}>
			<FaTimes
				onClick={onHandleClose}
				style={{
					color: "#f5222d",
					position: "absolute",
					top: 13,
					right: 15,
				}}
			/>
			<p className={errorStyle}>{hasError}</p>
		</div>
	) : null;

FormError.propTypes = {
	hasError: PropTypes.string,
	onHandleClose: PropTypes.func.isRequired,
};

export default FormError;
