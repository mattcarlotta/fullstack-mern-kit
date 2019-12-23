import get from "lodash/get";
import axios from "axios";
import { baseURL } from "@config/envs";

export const app = axios.create({
	baseURL,
});

app.interceptors.response.use(
	response => response,
	error => {
		const err = get(error, ["response", "data", "err"]);

		return Promise.reject(err || error.message);
	},
);

export default app;
