import isEmpty from "lodash/isEmpty";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import Toast from "@components/Toast";
import Placeholder from "@components/Placeholder";
import DisplayUserList from "@components/DisplayUserList";
import UserListNavigation from "@components/UserListNavigation";
import * as actions from "@actions/users";
import { preventScroll, usersContainer } from "./ShowUsers.module.scss";

export class ShowUsers extends Component {
	state = {
		data: [],
		isEditingID: "",
		isLoading: true,
		openModal: false,
	};

	componentDidMount = () => this.fetchData();

	fetchData = () => {
		this.props
			.fetchUsers()
			.then(res => this.setState({ data: res.data, isLoading: false }))
			.catch(err =>
				this.setState({ isLoading: false }, () =>
					Toast({ type: "error", message: err }),
				),
			);
	};

	handleSeedDatabase = () => {
		this.props
			.seedDB()
			.then(res => this.setState({ data: res.data, isLoading: false }))
			.catch(err =>
				this.setState({ isLoading: false }, () =>
					Toast({ type: "error", message: err }),
				),
			);
	};

	handleDeleteClick = id => {
		this.props
			.deleteUser(id)
			.then(res => this.updateUserList(res.data.message))
			.catch(err => Toast({ type: "error", message: err }));
	};

	handleEditClick = id => this.setState({ isEditingID: id });

	handleResetEditClick = () => this.setState({ isEditingID: "" });

	handleOpenModal = () => this.setState({ openModal: true, isEditingID: "" });

	handleCloseModal = () => this.setState({ openModal: false });

	updateUserList = message => {
		if (message) Toast({ type: "success", message });
		this.setState(
			{
				isLoading: true,
				openModal: false,
				isEditingID: "",
			},
			() => this.fetchData(),
		);
	};

	render = () => {
		const { data, isEditingID, isLoading, openModal } = this.state;

		return (
			<div className={`${usersContainer} ${openModal ? preventScroll : ""}`}>
				<Helmet title="Users" />
				<UserListNavigation
					onHandleOpenModal={this.handleOpenModal}
					onHandleSeedDatabase={this.handleSeedDatabase}
				/>
				{isLoading ? (
					<Placeholder />
				) : (
					<DisplayUserList
						data={!isEmpty(data) ? data : {}}
						createUser={this.props.createUser}
						isEditingID={isEditingID}
						openModal={openModal}
						onHandleCloseModal={this.handleCloseModal}
						onHandleDeleteClick={this.handleDeleteClick}
						onHandleEditClick={this.handleEditClick}
						onHandleResetEditClick={this.handleResetEditClick}
						onUpdateUserList={this.updateUserList}
						updateUser={this.props.updateUser}
					/>
				)}
			</div>
		);
	};
}

ShowUsers.propTypes = {
	createUser: PropTypes.func.isRequired,
	deleteUser: PropTypes.func.isRequired,
	fetchUsers: PropTypes.func.isRequired,
	seedDB: PropTypes.func.isRequired,
	updateUser: PropTypes.func.isRequired,
};

export default connect(null, { ...actions })(ShowUsers);
