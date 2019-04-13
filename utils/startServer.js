import express from "express";
import middlewares from "middlewares";
import routes from "routes";
import server from "server";

const app = express();

middlewares(app);
routes(app);
server(app);
