const devServer = require("./config/devServer");
const plugins = require("./config/plugins");
const optimization = require("./config/optimization");
const output = require("./config/output");
const rules = require("./config/rules");
const { entryPath } = require("./config/paths");
const { inDevelopment } = require("./config/envs");

// =============================================================== //
// WEBPACK CONFIGURATION                                           //
// =============================================================== //

const devtool = inDevelopment ? "cheap-module-source-map" : false;
const mode = inDevelopment ? "development" : "production";

module.exports = {
	devtool,
	devServer,
	entry: [entryPath],
	mode,
	module: { rules },
	optimization,
	output,
	performance: {
		hints: false,
	},
	resolve: {
		modules: ["src", "node_modules"],
		extensions: ["*", ".js", ".jsx", ".css", ".scss"],
	},
	plugins,
};
