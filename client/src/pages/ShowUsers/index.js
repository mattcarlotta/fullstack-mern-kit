import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import LoadingUsers from "@components/LoadingUsers";
import DisplayUserList from "@components/DisplayUserList";
import UserListNavigation from "@components/UserListNavigation";
import * as actions from "@actions/Users";
import { preventScroll, usersContainer } from "./ShowUsers.module.scss";

export class ShowUsers extends Component {
	state = {
		isEditingID: "",
		openModal: false,
	};

	componentDidMount = () => this.props.fetchUsers();

	handleDeleteClick = id => this.props.deleteUser(id);

	handleEditClick = id => this.setState({ isEditingID: id });

	handleResetEditClick = () => this.setState({ isEditingID: "" });

	handleOpenModal = () => this.setState({ openModal: true, isEditingID: "" });

	handleCloseModal = () => this.setState({ openModal: false, isEditingID: "" });

	render = () => {
		const { isEditingID, openModal } = this.state;
		const { data, isLoading } = this.props;

		return (
			<div className={`${usersContainer} ${openModal ? preventScroll : ""}`}>
				<Helmet title="Users" />
				<UserListNavigation
					onHandleOpenModal={this.handleOpenModal}
					onHandleSeedDatabase={this.props.seedDB}
				/>
				{isLoading ? (
					<LoadingUsers height={400} width={800} opacity="1" />
				) : (
					<DisplayUserList
						data={data}
						createUser={this.props.createUser}
						isEditingID={isEditingID}
						openModal={openModal}
						onHandleCloseModal={this.handleCloseModal}
						onHandleDeleteClick={this.handleDeleteClick}
						onHandleEditClick={this.handleEditClick}
						onHandleResetEditClick={this.handleResetEditClick}
						updateUser={this.props.updateUser}
					/>
				)}
			</div>
		);
	};
}

ShowUsers.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	createUser: PropTypes.func.isRequired,
	deleteUser: PropTypes.func.isRequired,
	fetchUsers: PropTypes.func.isRequired,
	seedDB: PropTypes.func.isRequired,
	updateUser: PropTypes.func.isRequired,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			address: PropTypes.shape({
				street: PropTypes.string,
				suite: PropTypes.string,
				city: PropTypes.string,
				state: PropTypes.string,
				zipCode: PropTypes.string,
			}),
			_id: PropTypes.string,
			email: PropTypes.string,
			firstName: PropTypes.string,
			lastName: PropTypes.string,
			userName: PropTypes.string,
			backgroundInfo: PropTypes.string,
		}),
	),
};

const mapStateToProps = ({ users }) => ({
	data: users.data,
	isLoading: users.isLoading,
});

const mapDispatchToProps = {
	...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowUsers);
