import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import ClickHandler from "./ClickHandler";
import {
	modalBody,
	modalClose,
	modalCloseButton,
	modalContainer,
	modalOverlay,
	modalTitle,
	modalTitleContainer,
} from "./Modal.module.scss";

const Modal = ({ closeModal, children, title }) => (
	<div className={modalOverlay}>
		<div className={modalContainer}>
			<ClickHandler closeModal={closeModal || null}>
				<div className={modalTitleContainer}>
					<div className={modalTitle}>{title}</div>
					<div className={modalClose}>
						<FaTimes className={modalCloseButton} onClick={closeModal} />
					</div>
				</div>
				<div className={modalBody}>{children}</div>
			</ClickHandler>
		</div>
	</div>
);

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	closeModal: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
};

export default Modal;
