import React from "react";
import PropTypes from "prop-types";
import EditButton from "@components/EditButton";
import DeleteButton from "@components/DeleteButton";
import Flex from "@components/Flex";
import FlexEnd from "@components/FlexEnd";
import FlexStart from "@components/FlexStart";
import Divider from "./Divider";
import {
	backgroundDetails,
	emailDetails,
	listDetails,
	user,
	userTitle,
} from "./Card.module.scss";

const Card = ({
	address: { street, state, suite, city, zipCode },
	backgroundInfo,
	email,
	firstName,
	onDeleteClick,
	onEditClick,
	lastName,
	userName,
}) => (
	<>
		<Flex>
			<FlexStart>
				<h1 className={userTitle}>{userName}</h1>
			</FlexStart>

			<FlexEnd>
				<EditButton id="edit-user" onClick={onEditClick} />
				<DeleteButton id="delete-user" onClick={onDeleteClick} />
			</FlexEnd>
		</Flex>

		<p className={user}>
			{firstName} {lastName}
			<span className={emailDetails}>({email})</span>
		</p>
		<ul className={listDetails}>
			<li>{street}</li>
			<Divider />
			{suite && (
				<>
					<li>{suite}</li>
					<Divider />
				</>
			)}
			<li>{city}</li>
			<Divider />
			<li>{state}</li>
			<Divider />
			<li>{zipCode}</li>
		</ul>
		<div className={backgroundDetails}>
			<p>{backgroundInfo}</p>
		</div>
	</>
);

Card.propTypes = {
	email: PropTypes.string,
	backgroundInfo: PropTypes.string,
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	onDeleteClick: PropTypes.func,
	onEditClick: PropTypes.func,
	userName: PropTypes.string,
	address: PropTypes.shape({
		street: PropTypes.string,
		suite: PropTypes.string,
		city: PropTypes.string,
		state: PropTypes.string,
		zipCode: PropTypes.string,
	}),
};

export default Card;
