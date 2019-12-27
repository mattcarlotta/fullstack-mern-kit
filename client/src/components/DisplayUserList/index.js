import isEmpty from "lodash/isEmpty";
import React from "react";
import PropTypes from "prop-types";
import Card from "@components/Card";
import Container from "@components/Container";
import NoData from "@components/NoData";
import UserForm from "@containers/UserForm";

const DisplayUserList = ({
	data,
	isEditingID,
	onHandleCloseModal,
	onHandleDeleteClick,
	onHandleEditClick,
	onHandleResetEditClick,
	updateUser,
}) => (
	<>
		{!isEmpty(data) ? (
			data.map(props => (
				<Container key={props._id}>
					{isEditingID !== props._id ? (
						<Card
							{...props}
							key={props._id}
							onEditClick={() => onHandleEditClick(props._id)}
							onDeleteClick={() => onHandleDeleteClick(props._id)}
						/>
					) : (
						<UserForm
							{...props}
							key={props._id}
							cancelUpdate={onHandleResetEditClick}
							resetForm={onHandleCloseModal}
							submitAction={updateUser}
							isEditing
						/>
					)}
				</Container>
			))
		) : (
			<NoData />
		)}
	</>
);

DisplayUserList.propTypes = {
	_id: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string,
			isEditing: PropTypes.bool,
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
		}),
	),
	isEditingID: PropTypes.string,
	onHandleCloseModal: PropTypes.func.isRequired,
	onHandleDeleteClick: PropTypes.func.isRequired,
	onHandleEditClick: PropTypes.func.isRequired,
	onHandleResetEditClick: PropTypes.func.isRequired,
	updateUser: PropTypes.func.isRequired,
};

export default DisplayUserList;
