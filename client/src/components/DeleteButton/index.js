import React from "react";
import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
import { deleteButtonStyle } from "./DeleteButton.module.scss";

const DeleteButton = ({ onClick, style }) => (
	<button
		type="button"
		style={style}
		className={deleteButtonStyle}
		onClick={onClick}
	>
		<FaTrashAlt />
	</button>
);

DeleteButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	style: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	),
};

export default DeleteButton;
