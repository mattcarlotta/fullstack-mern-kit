import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import LoadingUsers from "~components/LoadingUsers";
import DisplayUserList from "~components/DisplayUserList";
import UserListNavigation from "~components/UserListNavigation";
import Modal from "~components/Modal";
import UserForm from "~containers/UserForm";
import {
	createUser,
	deleteUser,
	fetchUsers,
	seedDB,
	updateUser,
} from "~actions/Users";
import { resetMessage } from "~actions/Server";
import { preventScroll, usersContainer } from "./ShowUsers.module.scss";

export class ShowUsers extends Component {
	state = {
		isEditingID: "",
		openModal: false,
	};

	componentDidMount = () => this.props.fetchUsers();

	handleEditClick = id => this.setState({ isEditingID: id });

	handleResetEditClick = () => this.setState({ isEditingID: "" });

	handleOpenModal = () => this.setState({ openModal: true, isEditingID: "" });

	handleCloseModal = () => this.setState({ openModal: false, isEditingID: "" });

	render = () => (
		<div
			className={`${usersContainer} ${
				this.state.openModal ? preventScroll : ""
			}`}
		>
			<Helmet title="Users" />
			<UserListNavigation
				openModal={this.handleOpenModal}
				seedDB={this.props.seedDB}
			/>
			{this.state.openModal && (
				<Modal onClick={this.handleCloseModal} title="Create New User">
					<UserForm
						{...this.props}
						submitAction={this.props.createUser}
						resetForm={this.handleCloseModal}
					/>
				</Modal>
			)}
			{this.props.isLoading ? (
				<LoadingUsers height={400} width={800} opacity="1" />
			) : (
				<DisplayUserList
					{...this.props}
					{...this.state}
					onHandleCloseModal={this.handleCloseModal}
					onHandleDeleteClick={this.props.deleteUser}
					onHandleEditClick={this.handleEditClick}
					onHandleResetEditClick={this.handleResetEditClick}
				/>
			)}
		</div>
	);
}

ShowUsers.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	createUser: PropTypes.func.isRequired,
	deleteUser: PropTypes.func.isRequired,
	fetchUsers: PropTypes.func.isRequired,
	seedDB: PropTypes.func.isRequired,
	resetMessage: PropTypes.func.isRequired,
	updateUser: PropTypes.func.isRequired,
	serverError: PropTypes.string,
	serverMessage: PropTypes.string,
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

const mapStateToProps = ({ users, server }) => ({
	data: users.data,
	isLoading: users.isLoading,
	serverError: server.error,
	serverMessage: server.message,
});

const mapDispatchToProps = {
	createUser,
	deleteUser,
	fetchUsers,
	resetMessage,
	seedDB,
	updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowUsers);
