import React from "react";
import { FaChartArea } from "react-icons/fa";
import Container from "components/Container";
import { noDataMessage } from "./NoData.module.scss";

const NoData = () => (
	<Container>
		<div css="margin-top: 50px;text-align: center;">
			<FaChartArea style={{ fontSize: 100, color: "#d4d3d3" }} />
			<h1 className={noDataMessage}>No Data Found!</h1>
			<p className={noDataMessage}>Add a user or seed the database.</p>
		</div>
	</Container>
);

export default NoData;
